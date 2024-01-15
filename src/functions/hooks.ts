"use client";
import {useLayoutEffect, useMemo, useState} from "react";
import { ICurrencyData } from "@/type";
import { getPrettyValueOfNumber } from "@/functions/pretty";

export const useCurrencyData = (item: ICurrencyData) => {
    return useMemo(() => {
        const price = getPrettyValueOfNumber(item.values?.USD.price);
        const marketCap = getPrettyValueOfNumber(item.values?.USD?.marketCap);
        const h24h = getPrettyValueOfNumber(Number(item.historicalPrice24h));
        const h7d = getPrettyValueOfNumber(Number(item.historicalPrice7d));
        const h30d = getPrettyValueOfNumber(Number(item.historicalPrice30d));
        const h3m = getPrettyValueOfNumber(Number(item.historicalPrice3m));
        const h6m = getPrettyValueOfNumber(Number(item.historicalPrice6m));
        return {
            price: price ? `$ ${ price}` : "",
            circulatingSupply: `${item.symbol} ${getPrettyValueOfNumber(item.circulatingSupply)}`,
            marketCap: marketCap ? `$ ${ marketCap}` : "",
            historicalPrice24h: h24h ? `$ ${ h24h}` : "",
            historicalPrice7d: h7d ? `$ ${ h7d}` : "",
            historicalPrice30d: h30d ? `$ ${ h30d}` : "",
            historicalPrice3m: h3m ? `$ ${ h3m}` : "",
            historicalPrice6m: h6m ? `$ ${ h6m}` : "",
        };
    }, [
        item.symbol,
        item.values,
        item.circulatingSupply,
        item.historicalPrice24h,
        item.historicalPrice7d,
        item.historicalPrice30d,
        item.historicalPrice3m,
        item.historicalPrice6m,
    ]);
};


export function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.scrollY);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return scrollPosition;
}

export function usePositionOfContainer(className: string) {

    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            const container = document.getElementsByClassName(className);
            if (!container || !container.length) {
                setPosition(0);
                return;
            }
            const rect = container.item(0)!.getBoundingClientRect();
            setPosition(rect.top);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return scrollPosition;
}