/* eslint-disable no-unused-vars */
const base64EncodeChars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z', '0', '1', '2', '3',
  '4', '5', '6', '7', '8', '9', '+', '/']
const base64DecodeChars = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1]

function restoreData (src, iv, pos) {
  var r = src
  r -= (iv + pos) % 64
  if (r < 0) {
    r += 64
  }
  return r & 0xff
}

function utf8encode (string) {
  string = string.replace(/\r\n/g, '\n')
  var utftext = ''
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n)
    if (c < 128) {
      utftext += String.fromCharCode(c)
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192)
      utftext += String.fromCharCode((c & 63) | 128)
    } else {
      utftext += String.fromCharCode((c >> 12) | 224)
      utftext += String.fromCharCode(((c >> 6) & 63) | 128)
      utftext += String.fromCharCode((c & 63) | 128)
    }
  }
  return utftext
}

function utf8decode (utftext) {
  var string = ''
  var i = 0
  var c = 0
  var c1 = 0
  var c2 = 0
  var c3 = 0
  while (i < utftext.length) {
    c = utftext.charCodeAt(i)
    if (c < 128) {
      string += String.fromCharCode(c)
      i++
    } else if ((c > 191) && (c < 224)) {
      c2 = utftext.charCodeAt(i + 1)
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
      i += 2
    } else {
      c2 = utftext.charCodeAt(i + 1)
      c3 = utftext.charCodeAt(i + 2)
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
      i += 3
    }
  }
  return string
}

export function FBase64Encode (data) {
  data = utf8encode(data)
  var sb = ''
  var iv = parseInt(Math.random() * 64)
  sb += base64EncodeChars[iv]
  var len = data.length
  var i = 0
  var b1, b2, b3
  while (i < len) {
    b1 = data.charCodeAt(i++) & 0xff
    if (i === len) {
      sb += base64EncodeChars[((b1 >>> 2) + iv + sb.length) % 64]
      sb += base64EncodeChars[(((b1 & 0x3) << 4) + iv + sb.length) % 64]
      break
    }
    b2 = data.charCodeAt(i++) & 0xff
    if (i === len) {
      sb += base64EncodeChars[((b1 >>> 2) + iv + sb.length) % 64]
      sb += base64EncodeChars[((((b1 & 0x03) << 4) | ((b2 & 0xf0) >>> 4)) + iv + sb.length) % 64]
      sb += base64EncodeChars[(((b2 & 0x0f) << 2) + iv + sb.length) % 64]
      break
    }
    b3 = data.charCodeAt(i++) & 0xff
    sb += base64EncodeChars[((b1 >>> 2) + iv + sb.length) % 64]
    sb += base64EncodeChars[((((b1 & 0x03) << 4) | ((b2 & 0xf0) >>> 4)) + iv + sb.length) % 64]
    sb += base64EncodeChars[((((b2 & 0x0f) << 2) | ((b3 & 0xc0) >>> 6)) + iv + sb.length) % 64]
    sb += base64EncodeChars[((b3 & 0x3f) + iv + sb.length) % 64]
  }
  return sb
}

export function FBase64Decode (data) {
  var len = data.length
  if ((len % 4) === 2) {
    return null
  }
  var sb = ''
  var iv = base64DecodeChars[data.charCodeAt(0)]
  if (iv === -1) {
    return null
  }
  var i = 1
  var b1, b2, b3, b4
  while (i < len) {
    do {
      b1 = restoreData(base64DecodeChars[data.charCodeAt(i)], iv, i)
      i++
    } while (i < len && b1 === -1)
    if (b1 === -1) break

    do {
      b2 = restoreData(base64DecodeChars[data.charCodeAt(i)], iv, i)
      i++
    } while (i < len && b2 === -1)
    if (b2 === -1) break
    sb += String.fromCharCode(((b1 << 2) | ((b2 & 0x30) >>> 4)))

    if (i === len) break
    do {
      b3 = restoreData(base64DecodeChars[data.charCodeAt(i)], iv, i)
      i++
    } while (i < len && b3 === -1)
    if (b3 === -1) break
    sb += String.fromCharCode(((((b2 & 0x0f) << 4) | ((b3 & 0x3c) >>> 2))))

    if (i === len) break
    do {
      b4 = restoreData(base64DecodeChars[data.charCodeAt(i)], iv, i)
      i++
    } while (i < len && b4 === -1)
    if (b4 === -1) break
    sb += String.fromCharCode(((((b3 & 0x03) << 6) | b4)))
  }
  return utf8decode(sb)
}
