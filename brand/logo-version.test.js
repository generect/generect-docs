'use strict'
/**
 * Logo version guard (generect/brand). Reads brand.lock.json at the repo root, offline:
 * every pinned logo file still has the pinned bytes, and nothing under the scanned folders
 * carries a retired Generect logo. To move to a new logo, run tools/sync.js from the brand
 * repo; never edit the lock or the logo files by hand.
 */
const test = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const REPO = path.resolve(__dirname, '..')
const lock = JSON.parse(fs.readFileSync(path.join(REPO, 'brand.lock.json'), 'utf8'))
const hash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')
const TEXT = /\.(svg|html?|css|m?js|cjs|jsx|tsx?|vue|json|txt|xml)$/i
const IMAGE = /\.(svg|png|jpe?g|ico|webp|gif|avif|pdf)$/i

function* files(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) yield* files(p)
    else if (e.isFile()) yield p
  }
}

test(`pinned logo files are logo ${lock.logo}`, () => {
  for (const [rel, f] of Object.entries(lock.files)) {
    assert.ok(fs.existsSync(path.join(REPO, rel)), `${rel} is missing`)
    assert.strictEqual(hash(path.join(REPO, rel)), f.sha256, `${rel} is not ${f.asset}@${lock.logo}: re-run generect/brand tools/sync.js`)
  }
})

test('no retired Generect logo in the shipped folders', () => {
  const found = []
  for (const dir of lock.scan) {
    for (const file of files(path.join(REPO, dir))) {
      const rel = path.relative(REPO, file)
      if (rel === 'brand.lock.json') continue
      if (IMAGE.test(file) && lock.retired.sha256[hash(file)]) { found.push(`${rel}: ${lock.retired.sha256[hash(file)]}`); continue }
      if (!TEXT.test(file) || fs.statSync(file).size > 4 * 1024 * 1024) continue
      const text = fs.readFileSync(file, 'utf8').toLowerCase()
      for (const r of lock.retired.text) {
        if (r.all.every((n) => text.includes(n.toLowerCase())) && (!r.any || r.any.some((n) => text.includes(n.toLowerCase())))) { found.push(`${rel}: ${r.label}`); break }
      }
    }
  }
  assert.deepStrictEqual(found, [], `retired logo found; the current one is ${lock.logo} (${lock.manifest})`)
})
