"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getBrowserYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getBrowserYear, getServerYear);

  return <>{year}</>;
}
