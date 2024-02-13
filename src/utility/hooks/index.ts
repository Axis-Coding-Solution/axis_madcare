/**
 *
 * all hooks would be served from here. it is the entry point of the hooks.
 *
 */

// react-js hooks
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

export const useAppState = useState;
export const useAppEffect = useEffect;
export const useAppMemo = useMemo;
export const useAppCallback = useCallback;
export const useAppRef = useRef;

// ** next-js hooks
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export const useAppParams = useParams;
export const useAppPathname = usePathname;
export const useAppRouter = useRouter;
export const useAppSearchParams = useSearchParams;

// ** you can import custom and third party (packages) hooks here.
