import { ExtendedRecordMap } from 'notion-types'
import {
  parsePageId,
  getCanonicalPageId as getCanonicalPageIdImpl
} from 'notion-utils'

import { inversePageUrlOverrides } from './config'

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: true })
  if (!cleanPageId) {
    return null
  }

  const override = inversePageUrlOverrides[cleanPageId]
  if (override) {
    return override
  } else {
    var url = getCanonicalPageIdImpl(pageId, recordMap, {
      uuid
    });
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (var i = 0; i < 6; i++) {
      n += t.charAt(Math.floor(Math.random() * a));
    }
    console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
    console.log(url + n)
    return url + n
  }
}

