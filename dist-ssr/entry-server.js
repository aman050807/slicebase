import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { renderToString } from "react-dom/server";
import { Analytics } from "@vercel/analytics/react";
const __vite_glob_0_0 = "/assets/lofty-1-CsPlputB.jpg";
const __vite_glob_0_1 = "/assets/lofty-10-B-Vr9z8E.jpg";
const __vite_glob_0_2 = "/assets/lofty-11-6jZORweu.jpg";
const __vite_glob_0_3 = "/assets/lofty-12-B5nDWA5R.jpg";
const __vite_glob_0_4 = "/assets/lofty-13-Bhi45pWy.jpg";
const __vite_glob_0_5 = "/assets/lofty-14-DqDTD75s.jpg";
const __vite_glob_0_6 = "/assets/lofty-15-B59wzX66.jpg";
const __vite_glob_0_7 = "/assets/lofty-16-Cv3pLlct.jpg";
const __vite_glob_0_8 = "/assets/lofty-17-ROO1u_Bo.jpg";
const __vite_glob_0_9 = "/assets/lofty-18-qqvvxUtk.jpg";
const __vite_glob_0_10 = "/assets/lofty-19-B0DQYDiA.jpg";
const __vite_glob_0_11 = "/assets/lofty-2-2UCH-UPT.jpg";
const __vite_glob_0_12 = "/assets/lofty-20-tNb1klhG.jpg";
const __vite_glob_0_13 = "/assets/lofty-21-C7k0cLjd.jpg";
const __vite_glob_0_14 = "/assets/lofty-22-7ue8Q3d0.jpg";
const __vite_glob_0_15 = "/assets/lofty-23-CA20Mbf1.jpg";
const __vite_glob_0_16 = "/assets/lofty-24-DrkRvBml.jpg";
const __vite_glob_0_17 = "/assets/lofty-25-BT_VH9OD.jpg";
const __vite_glob_0_18 = "/assets/lofty-26-CzzsOz3A.jpg";
const __vite_glob_0_19 = "/assets/lofty-27-BZRDUR7u.jpg";
const __vite_glob_0_20 = "/assets/lofty-28-BAF4qQJV.jpg";
const __vite_glob_0_21 = "/assets/lofty-29-DdVKfCJj.jpg";
const __vite_glob_0_22 = "/assets/lofty-3-L3s5k0Zk.jpg";
const __vite_glob_0_23 = "/assets/lofty-30-bAfrmxnA.jpg";
const __vite_glob_0_24 = "/assets/lofty-31-2SJcV5DA.jpg";
const __vite_glob_0_25 = "/assets/lofty-32-DdVhrCYs.jpg";
const __vite_glob_0_26 = "/assets/lofty-33-XFl_pe7h.jpg";
const __vite_glob_0_27 = "/assets/lofty-34-D1JS0UTx.jpg";
const __vite_glob_0_28 = "/assets/lofty-35-CSoyG3YR.jpg";
const __vite_glob_0_29 = "/assets/lofty-36-6up8P4E7.jpg";
const __vite_glob_0_30 = "/assets/lofty-37-Dg4DZBUZ.jpg";
const __vite_glob_0_31 = "/assets/lofty-38-fkx8UlDp.jpg";
const __vite_glob_0_32 = "/assets/lofty-39-uD7aTirE.jpg";
const __vite_glob_0_33 = "/assets/lofty-4-CACD9JGn.jpg";
const __vite_glob_0_34 = "/assets/lofty-40-DMKBB7Ea.jpg";
const __vite_glob_0_35 = "/assets/lofty-41-3Ou5_i2k.jpg";
const __vite_glob_0_36 = "/assets/lofty-42-BdpJPoNx.jpg";
const __vite_glob_0_37 = "/assets/lofty-43-ew9ODNKO.jpg";
const __vite_glob_0_38 = "/assets/lofty-44-C0SsaSHp.jpg";
const __vite_glob_0_39 = "/assets/lofty-45-DVMsEGbR.jpg";
const __vite_glob_0_40 = "/assets/lofty-46-64YPfUL6.jpg";
const __vite_glob_0_41 = "/assets/lofty-47-0zpF0THE.jpg";
const __vite_glob_0_42 = "/assets/lofty-48-C46c0jl2.jpg";
const __vite_glob_0_43 = "/assets/lofty-49-CzkrNZk8.jpg";
const __vite_glob_0_44 = "/assets/lofty-5-CdW8isqZ.jpg";
const __vite_glob_0_45 = "/assets/lofty-50-TLBc01YJ.jpg";
const __vite_glob_0_46 = "/assets/lofty-51-CFliZf-3.jpg";
const __vite_glob_0_47 = "/assets/lofty-52-CFivbR6Z.jpg";
const __vite_glob_0_48 = "/assets/lofty-53-DoE4fQvw.jpg";
const __vite_glob_0_49 = "/assets/lofty-54-C2y3Biy1.jpg";
const __vite_glob_0_50 = "/assets/lofty-55-C87dwr7y.jpg";
const __vite_glob_0_51 = "/assets/lofty-56-VGTCKTLp.jpg";
const __vite_glob_0_52 = "/assets/lofty-57-JBZIT7B4.jpg";
const __vite_glob_0_53 = "/assets/lofty-58-CPkoQ0qA.jpg";
const __vite_glob_0_54 = "/assets/lofty-59-DHJtofq4.jpg";
const __vite_glob_0_55 = "/assets/lofty-6-tl3BJJF4.jpg";
const __vite_glob_0_56 = "/assets/lofty-60-CM8pjVf9.jpg";
const __vite_glob_0_57 = "/assets/lofty-61-B5bkdIXy.jpg";
const __vite_glob_0_58 = "/assets/lofty-62-Btl5s8E6.jpg";
const __vite_glob_0_59 = "/assets/lofty-63-C3qqPa-D.jpg";
const __vite_glob_0_60 = "/assets/lofty-64-42UAmkV6.jpg";
const __vite_glob_0_61 = "/assets/lofty-65-B9iqg8-K.jpg";
const __vite_glob_0_62 = "/assets/lofty-66-XRgl8G9l.jpg";
const __vite_glob_0_63 = "/assets/lofty-67-Cyvt7tC7.jpg";
const __vite_glob_0_64 = "/assets/lofty-68-D9twbaDJ.jpg";
const __vite_glob_0_65 = "/assets/lofty-69-DlUd60b-.jpg";
const __vite_glob_0_66 = "/assets/lofty-7-Os39zada.jpg";
const __vite_glob_0_67 = "/assets/lofty-70-DH6XnZ_4.jpg";
const __vite_glob_0_68 = "/assets/lofty-71-BoSdJWH-.jpg";
const __vite_glob_0_69 = "/assets/lofty-72-CbfpoBh2.jpg";
const __vite_glob_0_70 = "/assets/lofty-73-Df0A0S4-.jpg";
const __vite_glob_0_71 = "/assets/lofty-74-6CaZsAaB.jpg";
const __vite_glob_0_72 = "/assets/lofty-75-C3_-XmJX.jpg";
const __vite_glob_0_73 = "/assets/lofty-76-B0W83qP6.jpg";
const __vite_glob_0_74 = "/assets/lofty-77-DdKxKD9L.jpg";
const __vite_glob_0_75 = "/assets/lofty-78-Rou95RV2.jpg";
const __vite_glob_0_76 = "/assets/lofty-79-D0bLuymf.jpg";
const __vite_glob_0_77 = "/assets/lofty-8-C6G3NaXG.jpg";
const __vite_glob_0_78 = "/assets/lofty-80-BJ7Tu1Vc.jpg";
const __vite_glob_0_79 = "/assets/lofty-81-jXovkTUi.jpg";
const __vite_glob_0_80 = "/assets/lofty-82-21JmzoHg.jpg";
const __vite_glob_0_81 = "/assets/lofty-83-C6i6N2z_.jpg";
const __vite_glob_0_82 = "/assets/lofty-84-BCd9j9qS.jpg";
const __vite_glob_0_83 = "/assets/lofty-9-D0pTJWz-.jpg";
const __vite_glob_0_84 = "/assets/ocean-1-bxpnaSD2.jpg";
const __vite_glob_0_85 = "/assets/ocean-10-CYkXFjWy.jpg";
const __vite_glob_0_86 = "/assets/ocean-11-CWZydPBA.jpg";
const __vite_glob_0_87 = "/assets/ocean-12-MdA4M_NQ.jpg";
const __vite_glob_0_88 = "/assets/ocean-13-NYRNahnw.jpg";
const __vite_glob_0_89 = "/assets/ocean-14-CxcJOpYr.jpg";
const __vite_glob_0_90 = "/assets/ocean-15-CUnzbt-d.jpg";
const __vite_glob_0_91 = "/assets/ocean-16-BKWi2ygU.jpg";
const __vite_glob_0_92 = "/assets/ocean-17-DsGCF3z_.jpg";
const __vite_glob_0_93 = "/assets/ocean-18-hNoE5Eyi.jpg";
const __vite_glob_0_94 = "/assets/ocean-19-s63oO3BG.jpg";
const __vite_glob_0_95 = "/assets/ocean-2-DitGq8BR.jpg";
const __vite_glob_0_96 = "/assets/ocean-20-iQTPIsCr.jpg";
const __vite_glob_0_97 = "/assets/ocean-21-CXn_GpqG.jpg";
const __vite_glob_0_98 = "/assets/ocean-3-DoZuuVRc.jpg";
const __vite_glob_0_99 = "/assets/ocean-4-DeW-m53p.jpg";
const __vite_glob_0_100 = "/assets/ocean-5-BlL3aM_S.jpg";
const __vite_glob_0_101 = "/assets/ocean-6-Dh2QDZoZ.jpg";
const __vite_glob_0_102 = "/assets/ocean-7-BO9f41FB.jpg";
const __vite_glob_0_103 = "/assets/ocean-8-CcYhBpzi.jpg";
const __vite_glob_0_104 = "/assets/ocean-9-CmBlg9lj.jpg";
let cancelActive;
function scrollToSection(target) {
  cancelActive?.();
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const start = window.scrollY;
  const inset = (parseFloat(getComputedStyle(root).scrollPaddingTop) || 0) + (parseFloat(getComputedStyle(target).scrollMarginTop) || 0);
  const end = Math.max(0, Math.min(
    start + target.getBoundingClientRect().top - inset,
    root.scrollHeight - window.innerHeight
  ));
  const distance = end - start;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || Math.abs(distance) < 2) {
    window.scrollTo(0, end);
    root.style.scrollBehavior = previous;
    return;
  }
  const duration = Math.min(1400, 850 + Math.abs(distance) * 0.035);
  const began = performance.now();
  let frame = 0;
  const stop = () => {
    cancelAnimationFrame(frame);
    root.style.scrollBehavior = previous;
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelActive = void 0;
  };
  cancelActive = stop;
  window.addEventListener("wheel", stop, { passive: true, once: true });
  window.addEventListener("touchstart", stop, { passive: true, once: true });
  window.addEventListener("keydown", stop, { once: true });
  const step = (now) => {
    const progress = Math.min(1, (now - began) / duration);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}
function installWheelGlide() {
  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let target = window.scrollY;
  let previousTime = 0;
  let previousBehavior = "";
  const stop = () => {
    if (frame) {
      cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
    }
    frame = 0;
    target = window.scrollY;
    if (cancelActive === stop) cancelActive = void 0;
  };
  const step = (now) => {
    const elapsed = Math.min(48, previousTime ? now - previousTime : 16.67);
    previousTime = now;
    target = Math.min(target, Math.max(0, root.scrollHeight - innerHeight));
    const remaining = target - window.scrollY;
    const amount = 1 - Math.exp(-elapsed / 150);
    if (Math.abs(remaining) < 1.5) {
      window.scrollTo(0, target);
      stop();
      return;
    }
    window.scrollTo(0, window.scrollY + remaining * amount);
    frame = requestAnimationFrame(step);
  };
  const onWheel = (event) => {
    if (event.defaultPrevented || preference.matches || event.ctrlKey || event.metaKey || event.shiftKey || !event.cancelable || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;
    let element = event.target instanceof Element ? event.target : null;
    if (element?.closest('input, textarea, select, [contenteditable="true"], [role="dialog"]')) return;
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1) return;
    }
    const delta = event.deltaY * (event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? innerHeight : 1);
    const max = Math.max(0, root.scrollHeight - innerHeight);
    if (!frame && (window.scrollY <= 0 && delta < 0 || window.scrollY >= max && delta > 0)) return;
    event.preventDefault();
    if (!frame) {
      cancelActive?.();
      previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      target = window.scrollY;
      previousTime = 0;
      cancelActive = stop;
      frame = requestAnimationFrame(step);
    }
    if ((target - window.scrollY) * delta < 0) target = window.scrollY;
    target = Math.max(0, Math.min(max, target + delta * 0.85));
  };
  const onPreference = () => {
    if (preference.matches) stop();
  };
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  window.addEventListener("pointerdown", stop);
  preference.addEventListener("change", onPreference);
  return () => {
    stop();
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    window.removeEventListener("pointerdown", stop);
    preference.removeEventListener("change", onPreference);
  };
}
function TextLink(props) {
  return /* @__PURE__ */ jsx("a", { ...props, target: "_blank", rel: "noopener noreferrer" });
}
const brandSymbol = "/assets/slicebase-symbol-BAEuAoko.png";
const listingData = /* @__PURE__ */ JSON.parse('[{"id":1,"name":"2820 Rucker Ave","platform":"Lofty","city":"Everett, WA 98201","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$50.02/share","yieldLabel":"avg yield","yieldText":"6.9%","source":"https://www.lofty.ai/property_deal/2820-Rucker-Ave_Everett-WA-98201","photo":"lofty-1.jpg","rawMetrics":"$50.02/share · 6.9% avg yield · 7% Overvalued","valuation":"$3,795,700","monthlyRent":"$12,500.00","checkedAt":"2026-11-09"},{"id":2,"name":"20 Sederholm Path","platform":"Lofty","city":"Palm Coast, FL 32164","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$40.64/share","yieldLabel":"avg yield","yieldText":"11.6%","source":"https://www.lofty.ai/property_deal/20-Sederholm-Path_Palm-Coast-FL-32164","photo":"lofty-2.jpg","rawMetrics":"$40.64/share · 11.6% avg yield · 2% Undervalued","valuation":"$289,600","monthlyRent":"$2,105.12","checkedAt":"2026-11-09"},{"id":3,"name":"4506 S Fallwood Ct","platform":"Lofty","city":"Columbia, MO 65203","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$45.07/share","yieldLabel":"avg yield","yieldText":"15.4%","source":"https://www.lofty.ai/property_deal/4506-S-Fallwood-Ct_Columbia-MO-65203","photo":"lofty-3.jpg","rawMetrics":"$45.07/share · 15.4% avg yield · 2% Overvalued","valuation":"$465,150","monthlyRent":"$2,039.58","checkedAt":"2026-11-09"},{"id":4,"name":"6601 E Hearn Rd","platform":"Lofty","city":"Scottsdale, AZ 85254","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$41.90/share","yieldLabel":"avg yield","yieldText":"10.5%","source":"https://www.lofty.ai/property_deal/6601-E-Hearn-Rd_Scottsdale-AZ-85254","photo":"lofty-4.jpg","rawMetrics":"$41.90/share · 10.5% avg yield · 16% Undervalued","valuation":"$2,367,550","monthlyRent":"$8,057.34","checkedAt":"2026-11-09"},{"id":5,"name":"86 Madison Ave","platform":"Lofty","city":"Albany, NY 12202","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$18.90/share","yieldLabel":"avg yield","yieldText":"4.1%","source":"https://www.lofty.ai/property_deal/86-Madison-Ave_Albany-NY-12202","photo":"lofty-5.jpg","rawMetrics":"$18.90/share · 4.1% avg yield · 19% Undervalued","valuation":"$371,050","monthlyRent":"$9,491.26","checkedAt":"2026-11-09"},{"id":6,"name":"110 Gardengate Dr","platform":"Lofty","city":"Harvest, AL 35749","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$34.00/share","yieldLabel":"avg yield","yieldText":"6.3%","source":"https://www.lofty.ai/property_deal/110-Gardengate-Dr_Harvest-AL-35749","photo":"lofty-6.jpg","rawMetrics":"$34.00/share · 6.3% avg yield · 26% Undervalued","valuation":"$302,026","monthlyRent":"$1,829.95","checkedAt":"2026-11-09"},{"id":7,"name":"84 Madison Ave","platform":"Lofty","city":"Albany, NY 12202","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$44.00/share","yieldLabel":"avg yield","yieldText":"2.2%","source":"https://www.lofty.ai/property_deal/84-Madison-Ave_Albany-NY-12202","photo":"lofty-7.jpg","rawMetrics":"$44.00/share · 2.2% avg yield · 19% Overvalued","valuation":"$394,050","monthlyRent":"$2,281.10","checkedAt":"2026-11-09"},{"id":8,"name":"1317 South Solano Dr","platform":"Lofty","city":"Las Cruces, NM 88001","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$22.49/share","yieldLabel":"avg yield","yieldText":"12.1%","source":"https://www.lofty.ai/property_deal/1317-South-Solano-Dr_Las-Cruces-NM-88001","photo":"lofty-8.jpg","rawMetrics":"$22.49/share · 12.1% avg yield · 1% Undervalued","valuation":"$761,450","monthlyRent":"$3,162.59","checkedAt":"2026-11-09"},{"id":9,"name":"333 Illinois Ave","platform":"Lofty","city":"Lorain, Ohio 44052","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$30.49/share","yieldLabel":"avg yield","yieldText":"5.0%","source":"https://www.lofty.ai/property_deal/333-Illinois-Ave_Lorain-Ohio-44052","photo":"lofty-9.jpg","rawMetrics":"$30.49/share · 5.0% avg yield · 4% Overvalued","valuation":"$245,399.33","monthlyRent":"$1,705.00","checkedAt":"2026-11-09"},{"id":10,"name":"1415 Race St","platform":"Lofty","city":"Cincinnati, OH 45202","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$60.00/share","yieldLabel":"avg yield","yieldText":"14.8%","source":"https://www.lofty.ai/property_deal/1415-Race-St_Cincinnati-OH-45202","photo":"lofty-10.jpg","rawMetrics":"$60.00/share · 14.8% avg yield · 11% Overvalued","valuation":"$622,250","monthlyRent":"$3,966.00","checkedAt":"2026-11-09"},{"id":11,"name":"2305 N 156th Pl","platform":"Lofty","city":"Shoreline, WA 98133","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$59.94/share","yieldLabel":"avg yield","yieldText":"16.8%","source":"https://www.lofty.ai/property_deal/2305-N-156th-Pl_Shoreline-WA-98133","photo":"lofty-11.jpg","rawMetrics":"$59.94/share · 16.8% avg yield · 12% Overvalued","valuation":"$1,077,900","monthlyRent":"$6,944.79","checkedAt":"2026-11-09"},{"id":12,"name":"0 E 45Th St","platform":"Lofty","city":"Jacksonville, FL 32208","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$50.00/share","yieldLabel":"avg yield","yieldText":"7.1%","source":"https://www.lofty.ai/property_deal/0-E-45Th-St_Jacksonville-FL-32208","photo":"lofty-12.jpg","rawMetrics":"$50.00/share · 7.1% avg yield · Fairly valued","valuation":"$128,900","monthlyRent":"$814.42","checkedAt":"2026-11-09"},{"id":13,"name":"5541 S Peoria St","platform":"Lofty","city":"Chicago, IL 60621","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$28.95/share","yieldLabel":"avg yield","yieldText":"4.7%","source":"https://www.lofty.ai/property_deal/5541-S-Peoria-St_Chicago-IL-60621","photo":"lofty-13.jpg","rawMetrics":"$28.95/share · 4.7% avg yield · 32% Undervalued","valuation":"$273,650","monthlyRent":"$2,648.00","checkedAt":"2026-11-09"},{"id":14,"name":"2208 Murray Ave","platform":"Lofty","city":"Atlantic City, NJ 08401","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$23.74/share","yieldLabel":"avg yield","yieldText":"11.2%","source":"https://www.lofty.ai/property_deal/2208-Murray-Ave_Atlantic-City-NJ-08401","photo":"lofty-14.jpg","rawMetrics":"$23.74/share · 11.2% avg yield · 5% Overvalued","valuation":"$627,000","monthlyRent":"$8,197.92","checkedAt":"2026-11-09"},{"id":15,"name":"217 W Stone St","platform":"Lofty","city":"Gibsonburg, OH 43431","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$60.00/share","yieldLabel":"avg yield","yieldText":"12.7%","source":"https://www.lofty.ai/property_deal/217-W-Stone-St_Gibsonburg-OH-43431","photo":"lofty-15.jpg","rawMetrics":"$60.00/share · 12.7% avg yield · 17% Overvalued","valuation":"$117,450","monthlyRent":"$1,945.00","checkedAt":"2026-11-09"},{"id":16,"name":"323 E 9th St","platform":"Lofty","city":"Davenport, IA 52803","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$37.10/share","yieldLabel":"avg yield","yieldText":"8.9%","source":"https://www.lofty.ai/property_deal/323-E-9th-St_Davenport-IA-52803","photo":"lofty-16.jpg","rawMetrics":"$37.10/share · 8.9% avg yield · 25% Undervalued","valuation":"$118,300","monthlyRent":"$1,425.00","checkedAt":"2026-11-09"},{"id":17,"name":"62 Liberty St","platform":"Lofty","city":"Tiffin, OH 44883","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$38.55/share","yieldLabel":"avg yield","yieldText":"5.5%","source":"https://www.lofty.ai/property_deal/62-Liberty-St_Tiffin-OH-44883","photo":"lofty-17.jpg","rawMetrics":"$38.55/share · 5.5% avg yield · 22% Undervalued","valuation":"$80,300","monthlyRent":"$1,250.00","checkedAt":"2026-11-09"},{"id":18,"name":"222 57th St","platform":"Lofty","city":"Pittsburgh, PA 15201","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$51.90/share","yieldLabel":"avg yield","yieldText":"17.6%","source":"https://www.lofty.ai/property_deal/222-57th-St_Pittsburgh-PA-15201","photo":"lofty-18.jpg","rawMetrics":"$51.90/share · 17.6% avg yield · 3% Overvalued","valuation":"$432,650","monthlyRent":"$4,669.22","checkedAt":"2026-11-09"},{"id":19,"name":"581 San Francisco St","platform":"Lofty","city":"Las Cruces, NM 88001","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$43.25/share","yieldLabel":"avg yield","yieldText":"14.8%","source":"https://www.lofty.ai/property_deal/581-San-Francisco-St_Las-Cruces-NM-88001","photo":"lofty-19.jpg","rawMetrics":"$43.25/share · 14.8% avg yield · 126% Overvalued","valuation":"$286,250","monthlyRent":"$3,081.60","checkedAt":"2026-11-09"},{"id":20,"name":"1821 Donetto Dr","platform":"Lofty","city":"Leander, TX 78641","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$44.49/share","yieldLabel":"avg yield","yieldText":"13.1%","source":"https://www.lofty.ai/property_deal/1821-Donetto-Dr_Leander-TX-78641","photo":"lofty-20.jpg","rawMetrics":"$44.49/share · 13.1% avg yield · 3% Overvalued","valuation":"$637,700","monthlyRent":"$420.00","checkedAt":"2026-11-09"},{"id":21,"name":"9 Country Club Ln N","platform":"Lofty","city":"Briarcliff Manor, NY 10510","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$19.50/share","yieldLabel":"avg yield","yieldText":"3.2%","source":"https://www.lofty.ai/property_deal/9-Country-Club-Ln-N_Briarcliff-Manor-NY-10510","photo":"lofty-21.jpg","rawMetrics":"$19.50/share · 3.2% avg yield · 50% Undervalued","valuation":"$1,963,650","monthlyRent":"$11,125.65","checkedAt":"2026-11-09"},{"id":22,"name":"88 Madison Ave","platform":"Lofty","city":"Albany, NY 12202","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$29.00/share","yieldLabel":"avg yield","yieldText":"11.8%","source":"https://www.lofty.ai/property_deal/88-Madison-Ave_Albany-NY-12202","photo":"lofty-22.jpg","rawMetrics":"$29.00/share · 11.8% avg yield · 42% Undervalued","valuation":"$375,750","monthlyRent":"$16,481.78","checkedAt":"2026-11-09"},{"id":23,"name":"5333 Ponte Tresa Dr","platform":"Lofty","city":"Austin, TX 78738","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$53.88/share","yieldLabel":"avg yield","yieldText":"13.3%","source":"https://www.lofty.ai/property_deal/5333-Ponte-Tresa-Dr_Austin-TX-78738","photo":"lofty-23.jpg","rawMetrics":"$53.88/share · 13.3% avg yield · 25% Overvalued","valuation":"$763,150","monthlyRent":"$3,600.00","checkedAt":"2026-11-09"},{"id":24,"name":"503 Colorado Street Unit 4","platform":"Lofty","city":"Lawrence, KS 66044","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$40.38/share","yieldLabel":"avg yield","yieldText":"9.5%","source":"https://www.lofty.ai/property_deal/503-Colorado-Street-Unit-4_Lawrence-KS-66044","photo":"lofty-24.jpg","rawMetrics":"$40.38/share · 9.5% avg yield · 14% Undervalued","valuation":"$148,900","monthlyRent":"$1,660.00","checkedAt":"2026-11-09"},{"id":25,"name":"29172 Oakwood St","platform":"Lofty","city":"Inkster, MI 48141","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$30.85/share","yieldLabel":"avg yield","yieldText":"5.5%","source":"https://www.lofty.ai/property_deal/29172-Oakwood-St_Inkster-MI-48141","photo":"lofty-25.jpg","rawMetrics":"$30.85/share · 5.5% avg yield · 44% Undervalued","valuation":"$129,422.93","monthlyRent":"$1,200.00","checkedAt":"2026-11-09"},{"id":26,"name":"999 Canyon Rd","platform":"Lofty","city":"Ogden, UT 84404","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$49.95/share","yieldLabel":"avg yield","yieldText":"9.2%","source":"https://www.lofty.ai/property_deal/999-Canyon-Rd_Ogden-UT-84404","photo":"lofty-26.jpg","rawMetrics":"$49.95/share · 9.2% avg yield · 15% Overvalued","valuation":"$543,550","monthlyRent":"$2,250.00","checkedAt":"2026-11-09"},{"id":27,"name":"723 12th St","platform":"Lofty","city":"Moline, IL 61265","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$40.00/share","yieldLabel":"avg yield","yieldText":"6.0%","source":"https://www.lofty.ai/property_deal/723-12th-St_Moline-IL-61265","photo":"lofty-27.jpg","rawMetrics":"$40.00/share · 6.0% avg yield · 13% Undervalued","valuation":"$146,476.9","monthlyRent":"$1,575.00","checkedAt":"2026-11-09"},{"id":28,"name":"3427 Sturdevant St","platform":"Lofty","city":"Davenport, IA 52806","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$51.69/share","yieldLabel":"avg yield","yieldText":"7.0%","source":"https://www.lofty.ai/property_deal/3427-Sturdevant-St_Davenport-IA-52806","photo":"lofty-28.jpg","rawMetrics":"$51.69/share · 7.0% avg yield · 28% Undervalued","valuation":"$97,450","monthlyRent":"$1,110.00","checkedAt":"2026-11-09"},{"id":29,"name":"1190 Ridgetop Ave","platform":"Lofty","city":"Las Cruces, NM 88001","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$42.99/share","yieldLabel":"avg yield","yieldText":"17.0%","source":"https://www.lofty.ai/property_deal/1190-Ridgetop-Ave_Las-Cruces-NM-88001","photo":"lofty-29.jpg","rawMetrics":"$42.99/share · 17.0% avg yield · 2% Undervalued","valuation":"$295,200","monthlyRent":"$1,379.09","checkedAt":"2026-11-09"},{"id":30,"name":"724 3rd Ave","platform":"Lofty","city":"Watervliet, NY 12189","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$23.99/share","yieldLabel":"avg yield","yieldText":"6.5%","source":"https://www.lofty.ai/property_deal/724-3rd-Ave_Watervliet-NY-12189","photo":"lofty-30.jpg","rawMetrics":"$23.99/share · 6.5% avg yield · 15% Undervalued","valuation":"$236,850","monthlyRent":"$2,430.00","checkedAt":"2026-11-09"},{"id":31,"name":"3761 Jade Ave","platform":"Lofty","city":"Las Cruces, NM 88012","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$43.99/share","yieldLabel":"avg yield","yieldText":"17.6%","source":"https://www.lofty.ai/property_deal/3761-Jade-Ave_Las-Cruces-NM-88012","photo":"lofty-31.jpg","rawMetrics":"$43.99/share · 17.6% avg yield · 7% Undervalued","valuation":"$313,600","monthlyRent":"$2,912.18","checkedAt":"2026-11-09"},{"id":32,"name":"1411 Clarke Ave SW","platform":"Lofty","city":"Roanoke, VA 24016","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$48.99/share","yieldLabel":"avg yield","yieldText":"6.6%","source":"https://www.lofty.ai/property_deal/1411-Clarke-Ave-SW_Roanoke-VA-24016","photo":"lofty-32.jpg","rawMetrics":"$48.99/share · 6.6% avg yield · 2% Undervalued","valuation":"$362,400","monthlyRent":"$3,700.00","checkedAt":"2026-11-09"},{"id":33,"name":"1048 Hilton Rd","platform":"Lofty","city":"Cinnaminson, NJ 08077","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$59.99/share","yieldLabel":"avg yield","yieldText":"7.3%","source":"https://www.lofty.ai/property_deal/1048-Hilton-Rd_Cinnaminson-NJ-08077","photo":"lofty-33.jpg","rawMetrics":"$59.99/share · 7.3% avg yield · 26% Overvalued","valuation":"$259,800","monthlyRent":"$1,578.00","checkedAt":"2026-11-09"},{"id":34,"name":"12615 Jackson Ave","platform":"Lofty","city":"Grandview, MO 64030","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$49.94/share","yieldLabel":"avg yield","yieldText":"12.6%","source":"https://www.lofty.ai/property_deal/12615-Jackson-Ave_Grandview-MO-64030","photo":"lofty-34.jpg","rawMetrics":"$49.94/share · 12.6% avg yield · 9% Undervalued","valuation":"$1,352,100","monthlyRent":"$12,172.00","checkedAt":"2026-11-09"},{"id":35,"name":"2221 E Chase St","platform":"Lofty","city":"Baltimore, MD 21213","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$93.00/share","yieldLabel":"avg yield","yieldText":"22.5%","source":"https://www.lofty.ai/property_deal/2221-E-Chase-St_Baltimore-MD-21213","photo":"lofty-35.jpg","rawMetrics":"$93.00/share · 22.5% avg yield · 86% Overvalued","valuation":"$279,000","monthlyRent":"$2,918.11","checkedAt":"2026-11-09"},{"id":36,"name":"800 Embassy Drive Unit 202","platform":"Lofty","city":"Austin, TX 78702","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$49.99/share","yieldLabel":"avg yield","yieldText":"6.4%","source":"https://www.lofty.ai/property_deal/800-Embassy-Drive-Unit-202_Austin-TX-78702","photo":"lofty-36.jpg","rawMetrics":"$49.99/share · 6.4% avg yield · 23% Overvalued","valuation":"$503,900","monthlyRent":"$2,934.21","checkedAt":"2026-11-09"},{"id":37,"name":"217 McClallen Dr","platform":"Lofty","city":"Killington, VT 05751","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$41.00/share","yieldLabel":"avg yield","yieldText":"9.8%","source":"https://www.lofty.ai/property_deal/217-McClallen-Dr_Killington-VT-05751","photo":"lofty-37.jpg","rawMetrics":"$41.00/share · 9.8% avg yield · 48% Overvalued","valuation":"$923,050","monthlyRent":"$4,504.98","checkedAt":"2026-11-09"},{"id":38,"name":"172 OH-53","platform":"Lofty","city":"McCutchenville, OH 44844","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$45.00/share","yieldLabel":"avg yield","yieldText":"7.3%","source":"https://www.lofty.ai/property_deal/172-OH-53_McCutchenville-OH-44844","photo":"lofty-38.jpg","rawMetrics":"$45.00/share · 7.3% avg yield · 8% Undervalued","valuation":"$142,700","monthlyRent":"$1,266.80","checkedAt":"2026-11-09"},{"id":39,"name":"9901 E Evans Ave Unit 4C","platform":"Lofty","city":"Aurora, CO 80247","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$49.45/share","yieldLabel":"avg yield","yieldText":"14.5%","source":"https://www.lofty.ai/property_deal/9901-E-Evans-Ave-Unit-4C_Aurora-CO-80247","photo":"lofty-39.jpg","rawMetrics":"$49.45/share · 14.5% avg yield · 1% Undervalued","valuation":"$317,850","monthlyRent":"$1,595.00","checkedAt":"2026-11-09"},{"id":40,"name":"8848 N 95th St K","platform":"Lofty","city":"Milwaukee, WI 53224","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$69.50/share","yieldLabel":"avg yield","yieldText":"13.0%","source":"https://www.lofty.ai/property_deal/8848-N-95th-St-K_Milwaukee-WI-53224","photo":"lofty-40.jpg","rawMetrics":"$69.50/share · 13.0% avg yield · 39% Overvalued","valuation":"$68,850","monthlyRent":"$1,350.00","checkedAt":"2026-11-09"},{"id":41,"name":"13596 SW Mapleview Ln","platform":"Lofty","city":"Tigard, Oregon 97224","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$56.39/share","yieldLabel":"avg yield","yieldText":"10.3%","source":"https://www.lofty.ai/property_deal/13596-SW-Mapleview-Ln_Tigard-Oregon-97224","photo":"lofty-41.jpg","rawMetrics":"$56.39/share · 10.3% avg yield · 8% Overvalued","valuation":"$658,800","monthlyRent":"$4,256.86","checkedAt":"2026-11-09"},{"id":42,"name":"10828 Pluton St","platform":"Lofty","city":"Norwalk, CA 90650","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$55.50/share","yieldLabel":"avg yield","yieldText":"9.1%","source":"https://www.lofty.ai/property_deal/10828-Pluton-St_Norwalk-CA-90650","photo":"lofty-42.jpg","rawMetrics":"$55.50/share · 9.1% avg yield · 15% Overvalued","valuation":"$848,400","monthlyRent":"$5,000.00","checkedAt":"2026-11-09"},{"id":43,"name":"326-332 S Alcott St","platform":"Lofty","city":"Denver, CO 80219","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$24.00/share","yieldLabel":"avg yield","yieldText":"9.0%","source":"https://www.lofty.ai/property_deal/326-332-S-Alcott-St_Denver-CO-80219","photo":"lofty-43.jpg","rawMetrics":"$24.00/share · 9.0% avg yield · 43% Undervalued","valuation":"$924,600","monthlyRent":"$6,040.00","checkedAt":"2026-11-09"},{"id":44,"name":"395 Main St","platform":"Lofty","city":"Tiffin, OH 44883","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$55.00/share","yieldLabel":"avg yield","yieldText":"12.3%","source":"https://www.lofty.ai/property_deal/395-Main-St_Tiffin-OH-44883","photo":"lofty-44.jpg","rawMetrics":"$55.00/share · 12.3% avg yield · 19% Overvalued","valuation":"$190,200","monthlyRent":"$400.00","checkedAt":"2026-11-09"},{"id":45,"name":"Tepuy Juan Dolio 102 B","platform":"Lofty","city":"Juan Dolio, San Pedro de Macorís 21000","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$49.97/share","yieldLabel":"avg yield","yieldText":"5.9%","source":"https://www.lofty.ai/property_deal/Tepuy-Juan-Dolio-102-B_Juan-Dolio-San%20Pedro%20de%20Macor%C3%ADs-21000","photo":"lofty-45.jpg","rawMetrics":"$49.97/share · 5.9% avg yield · 0.05% Undervalued","valuation":"$191,300","monthlyRent":"$1,548.21","checkedAt":"2026-11-09"},{"id":46,"name":"516 E 2nd St","platform":"Lofty","city":"The Dalles, OR 97058","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$450.00/share","yieldLabel":"avg yield","yieldText":"14.2%","source":"https://www.lofty.ai/property_deal/516-E-2nd-St_The-Dalles-OR-97058","photo":"lofty-46.jpg","rawMetrics":"$450.00/share · 14.2% avg yield · 381% Overvalued","valuation":"$312,000","monthlyRent":"$2,500.00","checkedAt":"2026-11-09"},{"id":47,"name":"5604 Brownfield Dr (32 Units)","platform":"Lofty","city":"Lubbock, TX 79414","type":"Commercial","min":null,"yieldPct":null,"status":"Source listing","quote":"$13.91/share","yieldLabel":"avg yield","yieldText":"8.4%","source":"https://www.lofty.ai/property_deal/5604-Brownfield-Dr-(32-Units)_Lubbock-TX-79414","photo":"lofty-47.jpg","rawMetrics":"$13.91/share · 8.4% avg yield · 40% Overvalued","valuation":"$3,493,600","monthlyRent":"$13,592.20","checkedAt":"2026-11-09"},{"id":48,"name":"8201 Madison Ave","platform":"Lofty","city":"Cleveland, Ohio 44102","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$35.90/share","yieldLabel":"avg yield","yieldText":"6.8%","source":"https://www.lofty.ai/property_deal/8201-Madison-Ave_Cleveland-Ohio-44102","photo":"lofty-48.jpg","rawMetrics":"$35.90/share · 6.8% avg yield · 18% Undervalued","valuation":"$433,100","monthlyRent":"$2,945.09","checkedAt":"2026-11-09"},{"id":49,"name":"755 Robinwood Dr","platform":"Lofty","city":"Florissant, MO 63033","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$48.49/share","yieldLabel":"avg yield","yieldText":"1.8%","source":"https://www.lofty.ai/property_deal/755-Robinwood-Dr_Florissant-MO-63033","photo":"lofty-49.jpg","rawMetrics":"$48.49/share · 1.8% avg yield · 15% Undervalued","valuation":"$127,050","monthlyRent":"$1,345.00","checkedAt":"2026-11-09"},{"id":50,"name":"917 Pawnee Ave","platform":"Lofty","city":"Memphis, TN 38109","type":"Not specified","min":null,"yieldPct":null,"status":"Source listing","quote":"$33.49/share","yieldLabel":"avg yield","yieldText":"7.2%","source":"https://www.lofty.ai/property_deal/917-Pawnee-Ave_Memphis-TN-38109","photo":"lofty-50.jpg","rawMetrics":"$33.49/share · 7.2% avg yield · 37% Undervalued","valuation":"$122,677.8","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":51,"name":"25 Circle Dr","platform":"Lofty","city":"Dixmoor, IL 60426","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$18.73/share","yieldLabel":"avg yield","yieldText":"4.2%","source":"https://www.lofty.ai/property_deal/25-Circle-Dr_Dixmoor-IL-60426","photo":"lofty-51.jpg","rawMetrics":"$18.73/share · 4.2% avg yield · 63% Undervalued","valuation":"$145,264.88","monthlyRent":"$859.35","checkedAt":"2026-11-09"},{"id":52,"name":"542 Sumner St","platform":"Lofty","city":"Akron, OH 44304","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$40.00/share","yieldLabel":"avg yield","yieldText":"3.0%","source":"https://www.lofty.ai/property_deal/542-Sumner-St_Akron-OH-44304","photo":"lofty-52.jpg","rawMetrics":"$40.00/share · 3.0% avg yield · 16% Overvalued","valuation":"$142,643.76","monthlyRent":"$1,095.00","checkedAt":"2026-11-09"},{"id":53,"name":"566 Nash St","platform":"Lofty","city":"Akron, OH 44306","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$17.00/share","yieldLabel":"avg yield","yieldText":"2.1%","source":"https://www.lofty.ai/property_deal/566-Nash-St_Akron-OH-44306","photo":"lofty-53.jpg","rawMetrics":"$17.00/share · 2.1% avg yield · 66% Undervalued","valuation":"$105,952.32","monthlyRent":"$973.00","checkedAt":"2026-11-09"},{"id":54,"name":"7542 and 7656 S Colfax Ave","platform":"Lofty","city":"Chicago, IL 60649","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$16.98/share","yieldLabel":"avg yield","yieldText":"3.5%","source":"https://www.lofty.ai/property_deal/7542-and-7656-S-Colfax-Ave_Chicago-IL-60649","photo":"lofty-54.jpg","rawMetrics":"$16.98/share · 3.5% avg yield · 66% Undervalued","valuation":"$755,388","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":55,"name":"9583 Pagewood Ave","platform":"Lofty","city":"St. Louis, MO 63114","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$17.03/share","yieldLabel":"avg yield","yieldText":"7.7%","source":"https://www.lofty.ai/property_deal/9583-Pagewood-Ave_St.-Louis-MO-63114","photo":"lofty-55.jpg","rawMetrics":"$17.03/share · 7.7% avg yield · 64% Undervalued","valuation":"$130,109.98","monthlyRent":"$1,275.00","checkedAt":"2026-11-09"},{"id":56,"name":"2489 Charlene Ct","platform":"Lofty","city":"Macon, GA 31206","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$17.00/share","yieldLabel":"avg yield","yieldText":"8.2%","source":"https://www.lofty.ai/property_deal/2489-Charlene-Ct_Macon-GA-31206","photo":"lofty-56.jpg","rawMetrics":"$17.00/share · 8.2% avg yield · 57% Undervalued","valuation":"$228,500","monthlyRent":"$0.00","delisted":true,"delistedAt":"2026-11-05"},{"id":57,"name":"8143 S Sangamon St","platform":"Lofty","city":"Chicago, IL 60620","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$17.71/share","yieldLabel":"avg yield","yieldText":"4.0%","source":"https://www.lofty.ai/property_deal/8143-S-Sangamon-St_Chicago-IL-60620","photo":"lofty-57.jpg","rawMetrics":"$17.71/share · 4.0% avg yield · 8% Undervalued","valuation":"$331,176.98","monthlyRent":"$2,798.50","checkedAt":"2026-11-09"},{"id":58,"name":"3976 Stillwood Dr","platform":"Lofty","city":"Memphis, TN 38128","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$25.48/share","yieldLabel":"avg yield","yieldText":"5.6%","source":"https://www.lofty.ai/property_deal/3976-Stillwood-Dr_Memphis-TN-38128","photo":"lofty-58.jpg","rawMetrics":"$25.48/share · 5.6% avg yield · 51% Undervalued","valuation":"$203,787.05","monthlyRent":"$1,135.00","checkedAt":"2026-11-09"},{"id":59,"name":"27 Pillar Ln","platform":"Lofty","city":"Palm Coast, FL 32164","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$20.00/share","yieldLabel":"avg yield","yieldText":"9.8%","source":"https://www.lofty.ai/property_deal/27-Pillar-Ln_Palm-Coast-FL-32164","photo":"lofty-59.jpg","rawMetrics":"$20.00/share · 9.8% avg yield · 49% Undervalued","valuation":"$457,450","monthlyRent":"$2,800.00","checkedAt":"2026-11-09"},{"id":60,"name":"Ohio 3 Property Package","platform":"Lofty","city":"Akron, OH 44117","type":"Not specified","min":null,"yieldPct":null,"status":"Source listing","quote":"$16.00/share","yieldLabel":"avg yield","yieldText":"2.9%","source":"https://www.lofty.ai/property_deal/Ohio-3-Property-Package_Akron-Ohio-44117","photo":"lofty-60.jpg","rawMetrics":"$16.00/share · 2.9% avg yield · 68% Undervalued","valuation":"$304,860","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":61,"name":"14720 Ohio Ave","platform":"Lofty","city":"Cleveland, OH 44128","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$38.19/share","yieldLabel":"avg yield","yieldText":"5.5%","source":"https://www.lofty.ai/property_deal/14720-Ohio-Ave_Cleveland-OH-44128","photo":"lofty-61.jpg","rawMetrics":"$38.19/share · 5.5% avg yield · 31% Undervalued","valuation":"$131,341.61","monthlyRent":"$1,325.00","checkedAt":"2026-11-09"},{"id":62,"name":"2094 W 34th Place","platform":"Lofty","city":"Cleveland, OH 44113","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$12.84/share","yieldLabel":"avg yield","yieldText":"3.7%","source":"https://www.lofty.ai/property_deal/2094-W-34th-Place_Cleveland-OH-44113","photo":"lofty-62.jpg","rawMetrics":"$12.84/share · 3.7% avg yield · 74% Undervalued","valuation":"$194,100","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":63,"name":"8202 Laurel Ave","platform":"Lofty","city":"Raytown, MO 64138","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$36.00/share","yieldLabel":"avg yield","yieldText":"7.7%","source":"https://www.lofty.ai/property_deal/8202-Laurel-Ave_Raytown-MO-64138","photo":"lofty-63.jpg","rawMetrics":"$36.00/share · 7.7% avg yield · 0.32% Overvalued","valuation":"$209,550","monthlyRent":"$1,510.00","checkedAt":"2026-11-09"},{"id":64,"name":"Earl DAO","platform":"Lofty","city":"Not specified","type":"Not specified","min":null,"yieldPct":null,"status":"Source listing","quote":"$44.95/share","yieldLabel":"avg yield","yieldText":"13.3%","source":"https://www.lofty.ai/property_deal/Earl-DAO_--","photo":"lofty-64.jpg","rawMetrics":"$44.95/share · 13.3% avg yield · 5% Overvalued","valuation":null,"checkedAt":"2026-11-09"},{"id":65,"name":"927 Euclid Ave Apt 10","platform":"Lofty","city":"Miami Beach, FL 33139","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$16.75/share","yieldLabel":"avg yield","yieldText":"3.0%","source":"https://www.lofty.ai/property_deal/927-Euclid-Ave-Apt-10_Miami-Beach-FL-33139","photo":"lofty-65.jpg","rawMetrics":"$16.75/share · 3.0% avg yield · 66% Undervalued","valuation":"$484,599.4","monthlyRent":"$2,800.00","checkedAt":"2026-11-09"},{"id":66,"name":"1278 E 187th St","platform":"Lofty","city":"Cleveland, OH 44110","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$24.40/share","yieldLabel":"avg yield","yieldText":"4.5%","source":"https://www.lofty.ai/property_deal/1278-E-187th-St_Cleveland-OH-44110","photo":"lofty-66.jpg","rawMetrics":"$24.40/share · 4.5% avg yield · 51% Undervalued","valuation":"$91,604.08","monthlyRent":"$950.00","checkedAt":"2026-11-09"},{"id":67,"name":"6422 Mount Ave","platform":"Lofty","city":"St. Louis, MO 63121","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$50.00/share","yieldLabel":"avg yield","yieldText":"5.3%","source":"https://www.lofty.ai/property_deal/6422-Mount-Ave_St.-Louis-MO-63121","photo":"lofty-67.jpg","rawMetrics":"$50.00/share · 5.3% avg yield · 25% Undervalued","valuation":"$104,100","monthlyRent":"$1,100.00","checkedAt":"2026-11-09"},{"id":68,"name":"1456 W 85th St","platform":"Lofty","city":"Cleveland, OH 44102","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$31.00/share","yieldLabel":"avg yield","yieldText":"1.9%","source":"https://www.lofty.ai/property_deal/1456-W-85th-St_Cleveland-OH-44102","photo":"lofty-68.jpg","rawMetrics":"$31.00/share · 1.9% avg yield · 24% Undervalued","valuation":"$212,100","monthlyRent":"$2,245.62","checkedAt":"2026-11-09"},{"id":69,"name":"15 Wilshire Blvd","platform":"Lofty","city":"Lubbock, TX 79416","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$37.49/share","yieldLabel":"avg yield","yieldText":"9.3%","source":"https://www.lofty.ai/property_deal/15-Wilshire-Blvd_Lubbock-TX-79416","photo":"lofty-69.jpg","rawMetrics":"$37.49/share · 9.3% avg yield · 12% Undervalued","valuation":"$402,500","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":70,"name":"432 W Peebles Rd","platform":"Lofty","city":"Memphis, TN 38109","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$15.00/share","yieldLabel":"avg yield","yieldText":"7.5%","source":"https://www.lofty.ai/property_deal/432-W-Peebles-Rd_Memphis-TN-38109","photo":"lofty-70.jpg","rawMetrics":"$15.00/share · 7.5% avg yield · 66% Undervalued","valuation":"$94,861","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":71,"name":"1677 Walker Ave","platform":"Lofty","city":"Memphis, TN 38114","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$29.64/share","yieldLabel":"avg yield","yieldText":"2.0%","source":"https://www.lofty.ai/property_deal/1677-Walker-Ave_Memphis-TN-38114","photo":"lofty-71.jpg","rawMetrics":"$29.64/share · 2.0% avg yield · 40% Undervalued","valuation":"$213,684.95","monthlyRent":"$1,430.00","checkedAt":"2026-11-09"},{"id":72,"name":"3493 W 119th St","platform":"Lofty","city":"Cleveland, OH 44111","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$39.83/share","yieldLabel":"avg yield","yieldText":"4.1%","source":"https://www.lofty.ai/property_deal/3493-W-119th-St_Cleveland-OH-44111","photo":"lofty-72.jpg","rawMetrics":"$39.83/share · 4.1% avg yield · 23% Undervalued","valuation":"$108,963","monthlyRent":"$1,245.00","checkedAt":"2026-11-09"},{"id":73,"name":"15555 Millard Ave","platform":"Lofty","city":"Markham, IL 60428","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$13.89/share","yieldLabel":"avg yield","yieldText":"2.7%","source":"https://www.lofty.ai/property_deal/15555-Millard-Ave_Markham-IL-60428","photo":"lofty-73.jpg","rawMetrics":"$13.89/share · 2.7% avg yield · 72% Undervalued","valuation":"$153,250","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":74,"name":"615 Rose Ln","platform":"Lofty","city":"Davenport, IA 52802","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$41.98/share","yieldLabel":"avg yield","yieldText":"5.1%","source":"https://www.lofty.ai/property_deal/615-Rose-Ln_Davenport-IA-52802","photo":"lofty-74.jpg","rawMetrics":"$41.98/share · 5.1% avg yield · 25% Undervalued","valuation":"$74,940","monthlyRent":"$1,050.00","checkedAt":"2026-11-09"},{"id":75,"name":"85-104 Alawa Pl","platform":"Lofty","city":"Waianae, HI 96792","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$17.00/share","yieldLabel":"avg yield","yieldText":"9.0%","source":"https://www.lofty.ai/property_deal/85-104-Alawa-Pl_Waianae-HI-96792","photo":"lofty-75.jpg","rawMetrics":"$17.00/share · 9.0% avg yield · 61% Undervalued","valuation":"$733,450","monthlyRent":"$1,865.76","checkedAt":"2026-11-09"},{"id":76,"name":"9634 S Green St","platform":"Lofty","city":"Chicago, IL 60643","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$27.00/share","yieldLabel":"avg yield","yieldText":"2.4%","source":"https://www.lofty.ai/property_deal/9634-S-Green-St_Chicago-IL-60643","photo":"lofty-76.jpg","rawMetrics":"$27.00/share · 2.4% avg yield · 46% Undervalued","valuation":"$187,697.91","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":77,"name":"14705 Fairland Dr","platform":"Lofty","city":"Pflugerville, TX 78660","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$24.00/share","yieldLabel":"avg yield","yieldText":"9.4%","source":"https://www.lofty.ai/property_deal/14705-Fairland-Dr_Pflugerville-TX-78660","photo":"lofty-77.jpg","rawMetrics":"$24.00/share · 9.4% avg yield · 48% Undervalued","valuation":"$453,450","monthlyRent":"$2,400.00","checkedAt":"2026-11-09"},{"id":78,"name":"428 Cross St","platform":"Lofty","city":"Akron, OH 44311","type":"Multi Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$40.00/share","yieldLabel":"avg yield","yieldText":"2.6%","source":"https://www.lofty.ai/property_deal/428-Cross-St_Akron-OH-44311","photo":"lofty-78.jpg","rawMetrics":"$40.00/share · 2.6% avg yield · 5% Undervalued","valuation":"$279,236.7","monthlyRent":"$1,802.42","checkedAt":"2026-11-09"},{"id":79,"name":"3878 Windermere Rd","platform":"Lofty","city":"Memphis, TN 38128","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$22.49/share","yieldLabel":"avg yield","yieldText":"2.4%","source":"https://www.lofty.ai/property_deal/3878-Windermere-Rd_Memphis-TN-38128","photo":"lofty-79.jpg","rawMetrics":"$22.49/share · 2.4% avg yield · 41% Undervalued","valuation":"$131,033.63","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":80,"name":"3514 W 123rd St","platform":"Lofty","city":"Cleveland, OH 44111","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$42.00/share","yieldLabel":"avg yield","yieldText":"5.2%","source":"https://www.lofty.ai/property_deal/3514-W-123rd-St_Cleveland-OH-44111","photo":"lofty-80.jpg","rawMetrics":"$42.00/share · 5.2% avg yield · 23% Undervalued","valuation":"$136,614.67","monthlyRent":"$1,100.00","checkedAt":"2026-11-09"},{"id":81,"name":"61622 El Reposo St","platform":"Lofty","city":"Joshua Tree, CA 92252","type":"Vacation Rental","min":null,"yieldPct":null,"status":"Source listing","quote":"$50.00/share","yieldLabel":"avg yield","yieldText":"11.8%","source":"https://www.lofty.ai/property_deal/61622-El-Reposo-St_Joshua-Tree-CA-92252","photo":"lofty-81.jpg","rawMetrics":"$50.00/share · 11.8% avg yield · Fairly valued","valuation":"$562,800","monthlyRent":"$3,286.11","checkedAt":"2026-11-09"},{"id":82,"name":"Universal Lending DAO (ULD)","platform":"Lofty","city":"Sheridan, Wyoming 82801","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$51.97/share","yieldLabel":"avg yield","yieldText":"6.3%","source":"https://www.lofty.ai/property_deal/Universal-Lending-DAO-(ULD)_Sheridan-Wyoming-82801","photo":"lofty-82.jpg","rawMetrics":"$51.97/share · 6.3% avg yield · 16% Undervalued","valuation":null,"checkedAt":"2026-11-09"},{"id":83,"name":"1106 29th Ave","platform":"Lofty","city":"Rock Island, IL 61201","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$52.00/share","yieldLabel":"avg yield","yieldText":"7.6%","source":"https://www.lofty.ai/property_deal/1106-29th-Ave_Rock-Island-IL-61201","photo":"lofty-83.jpg","rawMetrics":"$52.00/share · 7.6% avg yield · 4% Overvalued","valuation":"$82,732.16","monthlyRent":"$1,378.00","checkedAt":"2026-11-09"},{"id":84,"name":"51 St Clair St","platform":"Lofty","city":"Tiffin, OH 44883","type":"Single Family","min":null,"yieldPct":null,"status":"Source listing","quote":"$50.00/share","yieldLabel":"avg yield","yieldText":"3.9%","source":"https://www.lofty.ai/property_deal/51-St-Clair-St_Tiffin-OH-44883","photo":"lofty-84.jpg","rawMetrics":"$50.00/share · 3.9% avg yield · Fairly valued","valuation":"$137,250","monthlyRent":"$0.00","checkedAt":"2026-11-09"},{"id":85,"name":"Single underground parking space for rent in Techpark Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"TRADING","quote":"Not shown","yieldLabel":"APY","yieldText":"5.37%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x19c6831f0a5eac1db25f99cfee3172877d54d159","photo":"ocean-1.jpg","rawMetrics":null,"valuation":"$23,000","asset":"BSPT-OCN-0","checkedAt":"2026-11-09"},{"id":86,"name":"Co-living student house with 24 rooms in Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"TRADING","quote":"Not shown","yieldLabel":"APY","yieldText":"8.56%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xbbe6da55e8b6b2017e19285bf6277d9e9c2d0ec3","photo":"ocean-2.jpg","rawMetrics":null,"valuation":"$950,000","asset":"BSPT-OCN-1","checkedAt":"2026-11-09"},{"id":87,"name":"Student house Vrhovci, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"TRADING","quote":"Not shown","yieldLabel":"APY","yieldText":"7.48%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x071e599531f502c071ba9f18298425178bae2bd2","photo":"ocean-3.jpg","rawMetrics":null,"valuation":"$764,000","asset":"BSPT-OCN-15","checkedAt":"2026-11-09"},{"id":88,"name":"Guesthouse Groeninghe in Bruges","platform":"Oceanpoint","city":"Belgium","type":"Tokenized property","min":null,"yieldPct":null,"status":"LISTED","quote":"Not shown","yieldLabel":"APY","yieldText":"7.50%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x7c8fd5155d44792f8e39b1810a2d9372ac665396","photo":"ocean-4.jpg","rawMetrics":null,"valuation":"$705,000","asset":"BSPT-OCN-3","checkedAt":"2026-11-09"},{"id":89,"name":"Luxury apartment in old town Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"2.50%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xf3fc244c14def865834de89a2b71b21f0d0b31bf","photo":"ocean-5.jpg","rawMetrics":null,"valuation":"$1,170,000","asset":"BSPT-OCN-25","checkedAt":"2026-11-09"},{"id":90,"name":"Restaurant in old town Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"4.20%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x61bda4293896dae3809cdd2b730b21d5d965c43f","photo":"ocean-6.jpg","rawMetrics":null,"valuation":"$2,175,000","asset":"BSPT-OCN-16","checkedAt":"2026-11-09"},{"id":91,"name":"Rental House in Verden, Germany","platform":"Oceanpoint","city":"Germany","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"3.20%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xccc9010fc24908a378114ae21d9162f6646e7fe8","photo":"ocean-7.jpg","rawMetrics":null,"valuation":"$475,000","asset":"BSPT-OCN-11","checkedAt":"2026-11-09"},{"id":92,"name":"Mixed use complex in Verden, Germany","platform":"Oceanpoint","city":"Germany","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"4.10%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xd52d81a0f44abfa0a194de5d8da351154543a372","photo":"ocean-8.jpg","rawMetrics":null,"valuation":"$1,475,000","asset":"BSPT-OCN-10","checkedAt":"2026-11-09"},{"id":93,"name":"Pension with 20 rooms in Verden, Germany","platform":"Oceanpoint","city":"Germany","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"5.70%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xc006760b1f981c86493d8683913eed5ee0bdf52c","photo":"ocean-9.jpg","rawMetrics":null,"valuation":"$2,650,000","asset":"BSPT-OCN-9","checkedAt":"2026-11-09"},{"id":94,"name":"Guesthouse Dijver in Bruges","platform":"Oceanpoint","city":"Belgium","type":"Tokenized property","min":null,"yieldPct":null,"status":"LISTED","quote":"Not shown","yieldLabel":"APY","yieldText":"7.50%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xc162cd8480f9b716c3d5708eb765884c86c65de0","photo":"ocean-10.jpg","rawMetrics":null,"valuation":"$640,000","asset":"BSPT-OCN-4","checkedAt":"2026-11-09"},{"id":95,"name":"Guesthouse Aubrey in Bruges","platform":"Oceanpoint","city":"Belgium","type":"Tokenized property","min":null,"yieldPct":null,"status":"LISTED","quote":"Not shown","yieldLabel":"APY","yieldText":"7.80%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xe22293f708e777cecc820f2b6df424810c789443","photo":"ocean-11.jpg","rawMetrics":null,"valuation":"$540,000","asset":"BSPT-OCN-2","checkedAt":"2026-11-09"},{"id":96,"name":"Guesthouse with shop in Bruges","platform":"Oceanpoint","city":"Belgium","type":"Tokenized property","min":null,"yieldPct":null,"status":"LISTED","quote":"Not shown","yieldLabel":"APY","yieldText":"10.30%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x37908e77deba5ba008a72632bd8f2770ae33b979","photo":"ocean-12.jpg","rawMetrics":null,"valuation":"$1,190,000","asset":"BSPT-OCN-5","checkedAt":"2026-11-09"},{"id":97,"name":"Rental duplex apartment 7, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"7.90%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x3b0a87207cde77bb67ce0e047e497b66be5599c5","photo":"ocean-13.jpg","rawMetrics":null,"valuation":"$279,411","asset":"BSPT-OCN-44","checkedAt":"2026-11-09"},{"id":98,"name":"The Bank, Multipurpose building, Brugge, Belgium","platform":"Oceanpoint","city":"Belgium","type":"Tokenized property","min":null,"yieldPct":null,"status":"LISTED","quote":"Not shown","yieldLabel":"APY","yieldText":"10.00%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xc10185d215a751b72bdeef6e2859a1ad9e278442","photo":"ocean-14.jpg","rawMetrics":null,"valuation":"$1,805,123","asset":"BSPT-OCN-39","checkedAt":"2026-11-09"},{"id":99,"name":"Rental apartment 1, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.70%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x486c0333cb732265034e15f579419fa2ee4f9b6a","photo":"ocean-15.jpg","rawMetrics":null,"valuation":"$186,201","asset":"BSPT-OCN-47","checkedAt":"2026-11-09"},{"id":100,"name":"Restaurant Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"5.60%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x6bf9e4b7f04d8f7bb5cdae072aace10ffcdf621e","photo":"ocean-16.jpg","rawMetrics":null,"valuation":"$692,197","asset":"BSPT-OCN-46","checkedAt":"2026-11-09"},{"id":101,"name":"Rental duplex apartment 8, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.30%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x9d2b8ba6f6069982fcf9f9b1740decb3cf092268","photo":"ocean-17.jpg","rawMetrics":null,"valuation":"$262,821","asset":"BSPT-OCN-45","checkedAt":"2026-11-09"},{"id":102,"name":"Rental duplex apartment 6, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.20%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0xfc1d3441f37b3081176546f455b8523ebc66319b","photo":"ocean-18.jpg","rawMetrics":null,"valuation":"$204,756","asset":"BSPT-OCN-43","checkedAt":"2026-11-09"},{"id":103,"name":"Rental duplex apartment 5, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.00%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x90c304307049b5668126a01ba273b4c29ba078e2","photo":"ocean-19.jpg","rawMetrics":null,"valuation":"$249,396","asset":"BSPT-OCN-42","checkedAt":"2026-11-09"},{"id":104,"name":"Rental apartment 4, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.00%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x7a3b79a80958e9b9ebe33f0273854ffc1ed221a5","photo":"ocean-20.jpg","rawMetrics":null,"valuation":"$234,880","asset":"BSPT-OCN-41","checkedAt":"2026-11-09"},{"id":105,"name":"Rental studio apartment 3, Hisa Pod Gradom, Ljubljana, Slovenia","platform":"Oceanpoint","city":"Slovenia","type":"Tokenized property","min":null,"yieldPct":null,"status":"COMING SOON","quote":"Not shown","yieldLabel":"APY","yieldText":"8.00%","source":"https://marketplace.oceanpoint.fi/oceanpoint/marketplace","assetSource":"https://etherscan.io/address/0x5c14852429640e0f721306f9fc249186d8c3100b","photo":"ocean-21.jpg","rawMetrics":null,"valuation":"$184,236","asset":"BSPT-OCN-40","checkedAt":"2026-11-09"}]');
const capturedAt = "2026-11-04";
const loftyRefreshedAt = "2026-11-09T09:43:14.576Z";
const oceanpointRefreshedAt = "2026-11-09T09:43:14.576Z";
const oceanpointReported = 77;
const meta = {
  capturedAt,
  loftyRefreshedAt,
  oceanpointRefreshedAt,
  oceanpointReported
};
function calcScenario(inp, rr, dv = 0) {
  const rate = rr ?? inp.ratePct;
  const buyFee = inp.includeFees ? inp.amount * inp.buyPct / 100 : 0;
  const saleValue = inp.amount * (1 + dv);
  const sellFee = inp.sellAtEnd && inp.includeFees ? saleValue * inp.sellPct / 100 : 0;
  const annualNet = inp.amount * rate / 100 * (1 - inp.taxPct / 100) - inp.annualCosts;
  const periodIncome = annualNet * inp.years - inp.upfront;
  const totalIn = inp.amount + buyFee;
  const saleNet = inp.sellAtEnd ? saleValue - sellFee : 0;
  const totalBack = periodIncome + saleNet;
  const net = periodIncome + saleNet - buyFee - (inp.sellAtEnd ? inp.amount : 0);
  return {
    buyFee,
    sellFee,
    saleValue,
    annualNet,
    periodIncome,
    totalIn,
    saleNet,
    totalBack,
    net
  };
}
function feeBreakEvenMonths(res, upfront) {
  const costs = res.buyFee + res.sellFee + upfront;
  if (res.annualNet <= 0) return null;
  return costs / res.annualNet * 12;
}
function annualizedNetPct(res, years) {
  if (res.totalIn <= 0 || years <= 0) return 0;
  return res.net / res.totalIn / years * 100;
}
function sensitivityPer10Pct(inp) {
  const sellEff = inp.sellAtEnd && inp.includeFees ? inp.sellPct : 0;
  return 0.1 * inp.amount * (1 - sellEff / 100);
}
function valueFallBreakEven(inp) {
  if (!inp.sellAtEnd || inp.amount <= 0) return null;
  const res = calcScenario(inp);
  const sellEff = inp.includeFees ? inp.sellPct : 0;
  const proceedsFactor = inp.amount * (1 - sellEff / 100);
  if (proceedsFactor <= 0) return null;
  const numerator = inp.amount + res.buyFee - res.periodIncome;
  if (numerator <= 0) return null;
  return numerator / proceedsFactor - 1;
}
function chartSeries(inp, dv) {
  const res = calcScenario(inp, void 0, dv);
  const mCount = Math.max(Math.round(inp.years * 12), 12);
  const pts = [];
  for (let m = 0; m <= mCount; m++) {
    let pos = -(res.buyFee + inp.upfront) + res.annualNet * m / 12;
    if (inp.sellAtEnd && m === mCount)
      pos += res.saleValue - inp.amount - res.sellFee;
    pts.push(pos);
  }
  return pts;
}
function seriesBreakEvenMonth(pts) {
  const idx = pts.findIndex((v) => v >= 0);
  if (idx <= 0) return null;
  const prev = pts[idx - 1];
  const cur = pts[idx];
  const frac = cur > prev ? -prev / (cur - prev) : 0;
  return idx - 1 + frac;
}
function irrAnnualPct(inp, res) {
  if (!inp.sellAtEnd || res.annualNet <= 0) return null;
  const months = Math.max(Math.round(inp.years * 12), 12);
  const c0 = -(res.totalIn + inp.upfront);
  const monthly = res.annualNet / 12;
  const npv = (i) => {
    let sum = c0;
    for (let m = 1; m <= months; m++) {
      let cf = monthly;
      if (m === months) cf += res.saleNet;
      sum += cf / Math.pow(1 + i, m);
    }
    return sum;
  };
  let lo = -0.99;
  let hi = 1;
  if (npv(lo) < 0 || npv(hi) > 0) return null;
  for (let k = 0; k < 80; k++) {
    const mid = (lo + hi) / 2;
    if (npv(mid) > 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2 * 12 * 100;
}
const photoModules = /* @__PURE__ */ Object.assign({
  "./photos/listings/lofty-1.jpg": __vite_glob_0_0,
  "./photos/listings/lofty-10.jpg": __vite_glob_0_1,
  "./photos/listings/lofty-11.jpg": __vite_glob_0_2,
  "./photos/listings/lofty-12.jpg": __vite_glob_0_3,
  "./photos/listings/lofty-13.jpg": __vite_glob_0_4,
  "./photos/listings/lofty-14.jpg": __vite_glob_0_5,
  "./photos/listings/lofty-15.jpg": __vite_glob_0_6,
  "./photos/listings/lofty-16.jpg": __vite_glob_0_7,
  "./photos/listings/lofty-17.jpg": __vite_glob_0_8,
  "./photos/listings/lofty-18.jpg": __vite_glob_0_9,
  "./photos/listings/lofty-19.jpg": __vite_glob_0_10,
  "./photos/listings/lofty-2.jpg": __vite_glob_0_11,
  "./photos/listings/lofty-20.jpg": __vite_glob_0_12,
  "./photos/listings/lofty-21.jpg": __vite_glob_0_13,
  "./photos/listings/lofty-22.jpg": __vite_glob_0_14,
  "./photos/listings/lofty-23.jpg": __vite_glob_0_15,
  "./photos/listings/lofty-24.jpg": __vite_glob_0_16,
  "./photos/listings/lofty-25.jpg": __vite_glob_0_17,
  "./photos/listings/lofty-26.jpg": __vite_glob_0_18,
  "./photos/listings/lofty-27.jpg": __vite_glob_0_19,
  "./photos/listings/lofty-28.jpg": __vite_glob_0_20,
  "./photos/listings/lofty-29.jpg": __vite_glob_0_21,
  "./photos/listings/lofty-3.jpg": __vite_glob_0_22,
  "./photos/listings/lofty-30.jpg": __vite_glob_0_23,
  "./photos/listings/lofty-31.jpg": __vite_glob_0_24,
  "./photos/listings/lofty-32.jpg": __vite_glob_0_25,
  "./photos/listings/lofty-33.jpg": __vite_glob_0_26,
  "./photos/listings/lofty-34.jpg": __vite_glob_0_27,
  "./photos/listings/lofty-35.jpg": __vite_glob_0_28,
  "./photos/listings/lofty-36.jpg": __vite_glob_0_29,
  "./photos/listings/lofty-37.jpg": __vite_glob_0_30,
  "./photos/listings/lofty-38.jpg": __vite_glob_0_31,
  "./photos/listings/lofty-39.jpg": __vite_glob_0_32,
  "./photos/listings/lofty-4.jpg": __vite_glob_0_33,
  "./photos/listings/lofty-40.jpg": __vite_glob_0_34,
  "./photos/listings/lofty-41.jpg": __vite_glob_0_35,
  "./photos/listings/lofty-42.jpg": __vite_glob_0_36,
  "./photos/listings/lofty-43.jpg": __vite_glob_0_37,
  "./photos/listings/lofty-44.jpg": __vite_glob_0_38,
  "./photos/listings/lofty-45.jpg": __vite_glob_0_39,
  "./photos/listings/lofty-46.jpg": __vite_glob_0_40,
  "./photos/listings/lofty-47.jpg": __vite_glob_0_41,
  "./photos/listings/lofty-48.jpg": __vite_glob_0_42,
  "./photos/listings/lofty-49.jpg": __vite_glob_0_43,
  "./photos/listings/lofty-5.jpg": __vite_glob_0_44,
  "./photos/listings/lofty-50.jpg": __vite_glob_0_45,
  "./photos/listings/lofty-51.jpg": __vite_glob_0_46,
  "./photos/listings/lofty-52.jpg": __vite_glob_0_47,
  "./photos/listings/lofty-53.jpg": __vite_glob_0_48,
  "./photos/listings/lofty-54.jpg": __vite_glob_0_49,
  "./photos/listings/lofty-55.jpg": __vite_glob_0_50,
  "./photos/listings/lofty-56.jpg": __vite_glob_0_51,
  "./photos/listings/lofty-57.jpg": __vite_glob_0_52,
  "./photos/listings/lofty-58.jpg": __vite_glob_0_53,
  "./photos/listings/lofty-59.jpg": __vite_glob_0_54,
  "./photos/listings/lofty-6.jpg": __vite_glob_0_55,
  "./photos/listings/lofty-60.jpg": __vite_glob_0_56,
  "./photos/listings/lofty-61.jpg": __vite_glob_0_57,
  "./photos/listings/lofty-62.jpg": __vite_glob_0_58,
  "./photos/listings/lofty-63.jpg": __vite_glob_0_59,
  "./photos/listings/lofty-64.jpg": __vite_glob_0_60,
  "./photos/listings/lofty-65.jpg": __vite_glob_0_61,
  "./photos/listings/lofty-66.jpg": __vite_glob_0_62,
  "./photos/listings/lofty-67.jpg": __vite_glob_0_63,
  "./photos/listings/lofty-68.jpg": __vite_glob_0_64,
  "./photos/listings/lofty-69.jpg": __vite_glob_0_65,
  "./photos/listings/lofty-7.jpg": __vite_glob_0_66,
  "./photos/listings/lofty-70.jpg": __vite_glob_0_67,
  "./photos/listings/lofty-71.jpg": __vite_glob_0_68,
  "./photos/listings/lofty-72.jpg": __vite_glob_0_69,
  "./photos/listings/lofty-73.jpg": __vite_glob_0_70,
  "./photos/listings/lofty-74.jpg": __vite_glob_0_71,
  "./photos/listings/lofty-75.jpg": __vite_glob_0_72,
  "./photos/listings/lofty-76.jpg": __vite_glob_0_73,
  "./photos/listings/lofty-77.jpg": __vite_glob_0_74,
  "./photos/listings/lofty-78.jpg": __vite_glob_0_75,
  "./photos/listings/lofty-79.jpg": __vite_glob_0_76,
  "./photos/listings/lofty-8.jpg": __vite_glob_0_77,
  "./photos/listings/lofty-80.jpg": __vite_glob_0_78,
  "./photos/listings/lofty-81.jpg": __vite_glob_0_79,
  "./photos/listings/lofty-82.jpg": __vite_glob_0_80,
  "./photos/listings/lofty-83.jpg": __vite_glob_0_81,
  "./photos/listings/lofty-84.jpg": __vite_glob_0_82,
  "./photos/listings/lofty-9.jpg": __vite_glob_0_83,
  "./photos/listings/ocean-1.jpg": __vite_glob_0_84,
  "./photos/listings/ocean-10.jpg": __vite_glob_0_85,
  "./photos/listings/ocean-11.jpg": __vite_glob_0_86,
  "./photos/listings/ocean-12.jpg": __vite_glob_0_87,
  "./photos/listings/ocean-13.jpg": __vite_glob_0_88,
  "./photos/listings/ocean-14.jpg": __vite_glob_0_89,
  "./photos/listings/ocean-15.jpg": __vite_glob_0_90,
  "./photos/listings/ocean-16.jpg": __vite_glob_0_91,
  "./photos/listings/ocean-17.jpg": __vite_glob_0_92,
  "./photos/listings/ocean-18.jpg": __vite_glob_0_93,
  "./photos/listings/ocean-19.jpg": __vite_glob_0_94,
  "./photos/listings/ocean-2.jpg": __vite_glob_0_95,
  "./photos/listings/ocean-20.jpg": __vite_glob_0_96,
  "./photos/listings/ocean-21.jpg": __vite_glob_0_97,
  "./photos/listings/ocean-3.jpg": __vite_glob_0_98,
  "./photos/listings/ocean-4.jpg": __vite_glob_0_99,
  "./photos/listings/ocean-5.jpg": __vite_glob_0_100,
  "./photos/listings/ocean-6.jpg": __vite_glob_0_101,
  "./photos/listings/ocean-7.jpg": __vite_glob_0_102,
  "./photos/listings/ocean-8.jpg": __vite_glob_0_103,
  "./photos/listings/ocean-9.jpg": __vite_glob_0_104
});
const photoByFile = {};
for (const [path, url] of Object.entries(photoModules)) {
  photoByFile[path.split("/").pop()] = url;
}
const money = (n) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
}).format(n);
const LISTINGS = listingData;
const dayFmt = (iso) => new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata"
}).format(new Date(iso.length === 10 ? iso + "T12:00:00+05:30" : iso));
const CAPTURED = dayFmt(meta.capturedAt);
const REFRESHED = dayFmt(
  [meta.loftyRefreshedAt, meta.oceanpointRefreshedAt].sort()[0]
);
const N_LOFTY = LISTINGS.filter((l) => l.platform === "Lofty").length;
const N_OCEAN = LISTINGS.filter((l) => l.platform === "Oceanpoint").length;
LISTINGS.length;
const N_OCEAN_MISSING = Math.max(0, meta.oceanpointReported - N_OCEAN);
const valuationNumber = (v) => v ? Number(v.replace(/[^0-9.]/g, "")) : 0;
const impliedYieldFor = (l) => {
  const lv = valuationNumber(l.valuation);
  const lr = l.monthlyRent ? Number(l.monthlyRent.replace(/[^0-9.]/g, "")) : 0;
  return lv > 0 && lr > 0 ? lr * 12 * 100 / lv : null;
};
const fmtRate = (v) => v.toFixed(2).replace(/\.?0+$/, "");
const compactMoney = (n) => n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : money(n);
const INDEX_STATS = (() => {
  const valued = LISTINGS.filter((l) => valuationNumber(l.valuation) > 0);
  return {
    listings: LISTINGS.length,
    platforms: new Set(LISTINGS.map((l) => l.platform)).size,
    valueCount: valued.length,
    totalValue: valued.reduce((sum, l) => sum + valuationNumber(l.valuation), 0)
  };
})();
const HERO_VALUE_STATS = (() => {
  const valued = LISTINGS.filter((l) => !l.delisted && valuationNumber(l.valuation) > 0);
  return { count: valued.length, total: valued.reduce((sum, l) => sum + valuationNumber(l.valuation), 0) };
})();
function sectorFor(l) {
  if (l.platform === "Lofty")
    return l.type === "Not specified" ? "Type not disclosed" : l.type;
  const n = l.name.toLowerCase();
  if (n.includes("student")) return "Student housing";
  if (n.includes("parking")) return "Parking";
  if (n.includes("guesthouse") || n.includes("pension") || n.includes("hotel"))
    return "Hospitality";
  if (n.includes("restaurant")) return "Restaurant";
  if (n.includes("mixed use") || n.includes("multipurpose"))
    return "Mixed use";
  if (n.includes("apartment") || n.includes("duplex") || n.includes("studio") || n.includes("house"))
    return "Residential";
  return "Type not disclosed";
}
function loftyValueTag(l) {
  if (!l.rawMetrics) return null;
  const parts = l.rawMetrics.split("·").map((x) => x.trim());
  return parts.length === 3 ? parts[2] : null;
}
function liquidityFor(l) {
  if (l.delisted)
    return { text: "No longer shown on the platform marketplace", live: false };
  if (l.platform === "Lofty")
    return { text: "Secondary market: Lofty exchange", live: true };
  if (l.status === "TRADING")
    return { text: "Trading live on Oceanpoint", live: true };
  if (l.status === "LISTED")
    return { text: "Listed; not yet trading", live: false };
  return { text: "Not yet trading", live: false };
}
function platformFeesFor(l) {
  if (l.platform === "Lofty")
    return {
      buyPct: 2.5,
      sellPct: 3,
      note: "Lofty states 2.5% on purchases and 3% on sales (lofty.ai/how-it-works, checked 5 Nov 2026); applied here to the invested amount, assuming a later sale at the same value. Market orders can add a separate 2.5% market-maker fee (off by default; turn it on above to include it); property, payment or network costs may also apply. Stated platform fees only - not a complete all-in cost."
    };
  return {
    buyPct: 1.5,
    sellPct: 1.5,
    note: "Oceanpoint charges 1.5% on each marketplace trade, so a purchase and a later sale are each charged (oceanpoint.fi/earn, checked 5 Nov 2026); applied here to the invested amount, assuming a sale at the same value. Network gas and any property or issuer costs are extra and not included. Stated platform fees only - not a complete all-in cost."
  };
}
function PropertyBadges({ listing: l }) {
  const liq = liquidityFor(l);
  return /* @__PURE__ */ jsxs("div", { className: "sb-property-badges", children: [
    /* @__PURE__ */ jsx("span", { className: "sb-badge", children: sectorFor(l) }),
    /* @__PURE__ */ jsx("span", { className: `sb-badge${liq.live ? " sb-badge-live" : ""}`, children: liq.text })
  ] });
}
const ELIGIBILITY_NOTE = `Last updated: ${REFRESHED}. ${N_LOFTY} Lofty listings and ${N_OCEAN} Oceanpoint listings collected from their catalogs. Oceanpoint reports ${meta.oceanpointReported} properties; ${N_OCEAN_MISSING} are not captured in this view, so coverage is incomplete. Quotes and status can change. Platform terms below are checked separately from property metrics. Exact order minimums and full property costs remain unverified.`;
function termsFor(l) {
  const lofty = l.platform === "Lofty";
  return [
    { label: "Minimum investment", value: "Exact order minimum unverified" },
    { label: "Occupancy", value: "Not available in our listing data (4 Nov 2026)" },
    {
      label: "Fees",
      value: lofty ? "2.5% buy / 3% sell; market-order fee also applies" : "1.5% transaction fee; gas extra"
    },
    {
      label: "Ownership structure",
      value: lofty ? "LLC property interests, per Lofty's structure" : "BSPT property tokens, per Oceanpoint's structure"
    },
    {
      label: "Exit / resale",
      value: lofty ? "24/7 exchange; liquidity not guaranteed" : l.status === "COMING SOON" ? "Not trading yet; future exit unverified" : "Marketplace resale if enabled; buyer required"
    },
    {
      label: "Eligibility",
      value: lofty ? "18+ / KYC / sanctions & local rules" : "Account + KYC; country restrictions"
    }
  ];
}
const REFERRAL = {
  Lofty: {
    url: "https://www.lofty.ai/refer?utm_source=growsurf&utm_medium=referrals&utm_campaign=referral-program&grsf=v-m-aman-usskyd",
    perk: "new accounts currently get a $100 real-estate gift"
  },
  Oceanpoint: {
    url: "https://marketplace.oceanpoint.fi/oceanpoint/auth/sign-up?referralCode=9257706977afb3e695eacd36979504ab7b757e162fb6de7329aa66f81e5a8c5e",
    perk: "create a marketplace account"
  }
};
function ReferralNote() {
  return /* @__PURE__ */ jsx("p", { className: "sb-referral-line", children: "The platform button opens its sign-up page via a referral link; Slicebase may earn a reward. The source link stays direct." });
}
function JoinLink({ platform }) {
  const ref = REFERRAL[platform];
  if (!ref) return null;
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: "sb-join-link",
      href: ref.url,
      target: "_blank",
      rel: "sponsored noopener noreferrer",
      children: "Invest now ↗"
    }
  );
}
function TermNotes({ listing: l }) {
  const lofty = l.platform === "Lofty";
  return /* @__PURE__ */ jsxs("details", { className: "sb-term-notes", children: [
    /* @__PURE__ */ jsx("summary", { children: "Terms, scope & sources" }),
    /* @__PURE__ */ jsx("p", { children: "Platform-wide guidance, checked 4 Nov 2026. Not a verification of this offering's complete terms or your eligibility." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Property source (direct link, no referral):",
      " ",
      /* @__PURE__ */ jsxs(TextLink, { href: l.source, children: [
        "View this listing on ",
        l.platform,
        " ↗"
      ] })
    ] }),
    lofty ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Figures: stated rent / value is calculated from published monthly rent × 12 ÷ property value. Avg yield and the value tag are Lofty's own figures. Our listing data does not state the avg yield's gross/net basis or period. Lofty also lists a separate current yield without a published formula. These measures are different, not forecasts; a higher yield does not mean lower risk." }),
      /* @__PURE__ */ jsx("p", { children: "Entry: Lofty describes getting started with one share, often about $50, but also supports fractional shares. Its pages give differing entry descriptions. This listing's executable order minimum, available quantity and total including fees are not verified. Share price above is not a minimum-investment claim." }),
      /* @__PURE__ */ jsx("p", { children: "Costs: 2.5% on purchases and 3% on sales. Market orders include a separate 2.5% fee paid to market makers. No AUM fee or early withdrawal penalty is stated. Property operating costs and third-party payment/network charges may apply; full listing-specific costs are not verified." }),
      /* @__PURE__ */ jsx("p", { children: "Exit: no minimum holding period is stated. Limit orders fill only when matched; market execution depends on available liquidity and may involve slippage. Listing for sale is not a guaranteed sale or return of capital." }),
      /* @__PURE__ */ jsx("p", { children: "Access: Lofty says 18+ and identity verification, subject to sanctions and local law. Its broad international-access wording is not personal legal clearance. California's DFPI issued a 2022 order restricting further offers of the described LLC interests unless qualified or exempt; applicability to this offering is not verified." }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx(TextLink, { href: "https://www.lofty.ai/how-it-works", children: "How Lofty works ↗" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://www.lofty.ai/terms", children: "Lofty terms ↗" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://dfpi.ca.gov/enforcement_action/lofty-ai-inc/", children: "California order ↗" })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Entry: Oceanpoint advertises starting with a single BSPT. That is general guidance, not a verified minimum order for this property. Actual token quantity, price, available orders and total including fees must be checked in the marketplace." }),
      /* @__PURE__ */ jsx("p", { children: "Costs: Oceanpoint states a 1.5% transaction fee (1.0% to Oceanpoint, 0.5% to Blocksquare infrastructure). Network gas and property/issuer costs are separate; complete offering-specific costs are not verified. BST staking fee rules are not property-trading rules." }),
      /* @__PURE__ */ jsx("p", { children: "Exit: marketplace resale requires demand and an enabled market. Coming-soon and listed status do not establish a live exit. POINT instant liquidity is planned, not live. Staked BSPTs can be locked and cannot be sold during the staking term." }),
      /* @__PURE__ */ jsx("p", { children: "Access: an account and KYC are required to buy and hold BSPTs; some countries are unsupported. A complete supported-country list and this offering's jurisdiction restrictions were not verified. Country selection here does not establish legal access." }),
      l.id === 86 && /* @__PURE__ */ jsxs("p", { children: [
        "This property's signed corporate resolution describes a conditional issuer buyback if its resolution is withdrawn. It is not an investor on-demand redemption right.",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://ipfs.blocksquare.io/ipfs/QmdtzE4tvoQ1Xjw2yBWdiLdmAnQ6RmTxtrA1VWTJCkrwTn", children: "Read this property's resolution ↗" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx(TextLink, { href: "https://oceanpoint.fi/trade", children: "Trading & entry ↗" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://oceanpoint.fi/earn", children: "Transaction fees ↗" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://oceanpoint.fi/faq", children: "KYC & countries ↗" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: "https://oceanpoint.fi/learn/what-is-real-estate-staking", children: "Staking locks & transfer fees ↗" })
      ] })
    ] })
  ] });
}
function App() {
  useEffect(() => installWheelGlide(), []);
  useEffect(() => {
    const onSectionLink = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      if (!link || link.target === "_blank") return;
      const hash = link.getAttribute("href");
      const target = hash && hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (!target || !hash) return;
      event.preventDefault();
      if (location.hash !== hash) history.pushState(null, "", hash);
      requestAnimationFrame(() => scrollToSection(target));
    };
    document.addEventListener("click", onSectionLink);
    return () => document.removeEventListener("click", onSectionLink);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const [platform, setPlatform] = useState("all");
  const [maxMin, setMaxMin] = useState(1e4);
  const [sort, setSort] = useState("mixed");
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => setVisibleCount(12), [platform, maxMin, sort]);
  const [picked, setPicked] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const comparisonHeadingRef = useRef(null);
  useEffect(() => {
    if (!compareOpen) return;
    const heading = comparisonHeadingRef.current;
    if (!heading) return;
    heading.focus({ preventScroll: true });
    scrollToSection(heading);
  }, [compareOpen]);
  const results = useMemo(() => {
    let rows = LISTINGS.filter(
      (l) => (platform === "all" || l.platform === platform) && (maxMin === 1e4 || l.min !== null && l.min <= maxMin)
    );
    rows = [...rows].sort(
      (a2, b) => sort === "platform" ? a2.platform.localeCompare(b.platform) || a2.id - b.id : sort === "name" ? a2.name.localeCompare(b.name) : sort === "yield" ? (impliedYieldFor(b) ?? -1) - (impliedYieldFor(a2) ?? -1) || a2.id - b.id : a2.id - b.id
    );
    if (sort === "mixed" && platform === "all") {
      let seed = 314159;
      const random = () => {
        seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
        return seed / 4294967296;
      };
      const shuffled = (items) => {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };
      const lofty = shuffled(rows.filter((l) => l.platform === "Lofty"));
      const oceanpoint = shuffled(rows.filter((l) => l.platform === "Oceanpoint"));
      if (lofty.length && oceanpoint.length) {
        const gaps = oceanpoint.map(
          (_, i) => Math.floor((i + 1) * lofty.length / oceanpoint.length) - Math.floor(i * lofty.length / oceanpoint.length)
        );
        for (let i = 0; i + 1 < gaps.length; i += 2) {
          const move = Math.min(2, gaps[i]);
          gaps[i] -= move;
          gaps[i + 1] += move;
        }
        const variedGaps = shuffled(gaps);
        let cursor = 0;
        rows = [];
        oceanpoint.forEach((listing, i) => {
          rows.push(...lofty.slice(cursor, cursor + variedGaps[i]), listing);
          cursor += variedGaps[i];
        });
        rows.push(...lofty.slice(cursor));
      }
    }
    return rows;
  }, [platform, maxMin, sort]);
  const togglePick = (id) => {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };
  const calcParams = useMemo(
    () => typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search),
    []
  );
  const qpNum = (k, lo, hi) => {
    const v = calcParams.get(k);
    if (v == null || v.trim() === "") return null;
    const n = Number(v);
    return Number.isFinite(n) && n >= lo && n <= hi ? String(n) : null;
  };
  const initialCalcId = (() => {
    const id = qpNum("l", 1, 1e5);
    return id != null && LISTINGS.some((l) => l.id === Number(id)) ? Number(id) : 1;
  })();
  const [calcId, setCalcId] = useState(initialCalcId);
  const [calcMode, setCalcMode] = useState(
    calcParams.get("mode") === "goal" ? "goal" : "invest"
  );
  const [goal, setGoal] = useState(qpNum("g", 1, 1e6) ?? "500");
  const [amount, setAmount] = useState(qpNum("a", 1, 1e8) ?? "1000");
  const [rate, setRate] = useState(
    () => qpNum("r", 0, 100) ?? (() => {
      const iy = impliedYieldFor(
        LISTINGS.find((l) => l.id === initialCalcId) ?? LISTINGS[0]
      );
      return iy != null ? iy.toFixed(2) : "8";
    })()
  );
  const [years, setYears] = useState(qpNum("y", 1, 30) ?? "5");
  const [upfront, setUpfront] = useState(qpNum("u", 0, 1e8) ?? "0");
  const [annualFees, setAnnualFees] = useState(qpNum("c", 0, 1e8) ?? "0");
  const [includeFees, setIncludeFees] = useState(calcParams.get("fees") !== "0");
  const calcListing = LISTINGS.find((l) => l.id === calcId) ?? LISTINGS[0];
  const calcFees = platformFeesFor(calcListing);
  const calculatorRef = useRef(null);
  const [sellAtEnd, setSellAtEnd] = useState(calcParams.get("sell") !== "0");
  const [includeMarketFee, setIncludeMarketFee] = useState(
    calcParams.get("mkt") === "1"
  );
  const [taxRate, setTaxRate] = useState(qpNum("tax", 0, 99) ?? "0");
  const [compareRate, setCompareRate] = useState(qpNum("cmp", 0, 100) ?? "");
  const [valueChg, setValueChg] = useState("10");
  const [rateEdited, setRateEdited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chartTip, setChartTip] = useState(
    null
  );
  const numeric = [amount, rate, years, upfront, annualFees].map(Number);
  const validCalc = [amount, rate, years, upfront, annualFees].every((v) => v.trim() !== "") && numeric.every(Number.isFinite) && numeric[0] > 0 && numeric[0] <= 1e8 && numeric[1] >= 0 && numeric[1] <= 100 && numeric[2] >= 1 && numeric[2] <= 30 && numeric[3] >= 0 && numeric[4] >= 0;
  const [a, r, t, u, f] = numeric;
  const impliedYield = impliedYieldFor(calcListing);
  const rUse = !rateEdited && impliedYield != null ? impliedYield : r;
  const marketFeePct = calcListing.platform === "Lofty" && includeMarketFee ? 2.5 : 0;
  const buyEff = calcFees.buyPct + marketFeePct;
  const sellEff = calcFees.sellPct + marketFeePct;
  const taxNum = Number(taxRate);
  const tn = taxRate.trim() !== "" && Number.isFinite(taxNum) && taxNum >= 0 && taxNum < 100 ? taxNum : 0;
  const cmpNum = Number(compareRate);
  const validCmp = compareRate.trim() !== "" && Number.isFinite(cmpNum) && cmpNum >= 0 && cmpNum <= 100;
  const calcInp = {
    amount: a,
    ratePct: rUse,
    years: t,
    upfront: u,
    annualCosts: f,
    buyPct: buyEff,
    sellPct: sellEff,
    includeFees,
    sellAtEnd,
    taxPct: tn
  };
  const scenario = (rr, dv, buyPctE = buyEff, sellPctE = sellEff) => calcScenario({ ...calcInp, buyPct: buyPctE, sellPct: sellPctE }, rr, dv);
  const base = scenario(rUse, 0);
  const oneTimeCosts = base.buyFee + base.sellFee + u;
  const breakEvenMonths = feeBreakEvenMonths(base, u);
  const annualizedNet = annualizedNetPct(base, t);
  const irrNet = irrAnnualPct(calcInp, base);
  const valueFall = valueFallBreakEven(calcInp);
  const sensitivity10 = sensitivityPer10Pct(calcInp);
  const gridRates = useMemo(() => {
    const raw = [rUse + 2, rUse, Math.max(rUse - 2, 0.25)];
    if (impliedYield != null && Math.abs(impliedYield - rUse) >= 5e-3)
      raw.push(impliedYield);
    raw.sort((x, y) => y - x);
    const dedup = [];
    raw.forEach((v) => {
      if (!dedup.some((d) => Math.abs(d - v) < 0.05)) dedup.push(v);
    });
    return dedup;
  }, [rUse, impliedYield]);
  const cvNum = Math.min(Math.max(Number(valueChg) || 0, 0), 40);
  const gridRows = [
    { label: `Value down ${cvNum}%`, dv: -cvNum / 100 },
    { label: "Value unchanged", dv: 0 },
    { label: `Value up ${cvNum}%`, dv: cvNum / 100 }
  ];
  const cmpGain = validCmp ? a * cmpNum * t / 100 : null;
  const seriesLow = validCalc ? chartSeries(calcInp, -cvNum / 100) : [];
  const seriesMid = validCalc ? chartSeries(calcInp, 0) : [];
  const seriesHigh = validCalc ? chartSeries(calcInp, cvNum / 100) : [];
  const beMonth = seriesMid.length > 1 ? seriesBreakEvenMonth(seriesMid) : null;
  const goalNumeric = [goal, rate, annualFees].map(Number);
  const validGoal = [goal, rate, annualFees].every((v) => v.trim() !== "") && goalNumeric.every(Number.isFinite) && goalNumeric[0] > 0 && goalNumeric[0] <= 1e6 && goalNumeric[1] > 0 && goalNumeric[1] <= 100 && goalNumeric[2] >= 0;
  const [g, , gf] = goalNumeric;
  const gr = rUse;
  const goalGrossNeeded = tn > 0 ? g * 12 / (1 - tn / 100) : g * 12;
  const goalInvestment = (goalGrossNeeded + gf) * 100 / gr;
  const goalRates = [gr + 2, gr, Math.max(gr - 2, 0.25)];
  const applyListing = (listing) => {
    setCalcId(listing.id);
    const iy = impliedYieldFor(listing);
    if (iy != null) {
      setRate(iy.toFixed(2));
      setRateEdited(false);
    }
  };
  const openCalculator = (listing) => {
    applyListing(listing);
    if (calculatorRef.current) scrollToSection(calculatorRef.current);
  };
  const compareAnother = () => {
    setPicked(
      (prev) => prev.includes(calcId) ? prev : [calcId, ...prev].slice(0, 3)
    );
    const directory = document.getElementById("compare");
    if (directory) scrollToSection(directory);
  };
  const copyScenarioLink = () => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams({
      l: String(calcId),
      a: amount,
      r: rate,
      y: years,
      u: upfront,
      c: annualFees,
      fees: includeFees ? "1" : "0",
      mkt: includeMarketFee ? "1" : "0",
      tax: taxRate,
      sell: sellAtEnd ? "1" : "0"
    });
    if (validCmp) q.set("cmp", compareRate);
    if (calcMode === "goal") {
      q.set("mode", "goal");
      q.set("g", goal);
    }
    const url = `${window.location.origin}${window.location.pathname}?${q.toString()}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2e3);
    }).catch(() => {
    });
  };
  const downloadCsv = () => {
    if (typeof window === "undefined" || !validCalc) return;
    const rows = [
      ["Slicebase scenario estimate - informational only, not investment advice"],
      [],
      ["Listing", calcListing.name],
      ["Platform", calcListing.platform],
      ["Investment", money(a)],
      ["Annual income rate", `${fmtRate(r)}%`],
      ["Holding period", `${t} ${t === 1 ? "year" : "years"}`],
      ["Stated fees", `${buyEff}% buy + ${sellEff}% sell`],
      ["Tax rate on income", `${tn}%`],
      ["Sell at end", sellAtEnd ? "yes" : "no"],
      [],
      ["You put in", money(base.totalIn)],
      ["You get back", money(base.totalBack)],
      [sellAtEnd ? "Net result if sold at end" : "Net income", money(base.net)],
      ["Annualized net (simple average)", `${annualizedNet.toFixed(1)}%`]
    ];
    if (irrNet != null)
      rows.push(["Timing-adjusted annual rate", `${irrNet.toFixed(1)}%`]);
    if (sellAtEnd && valueFall != null && valueFall < 0)
      rows.push([
        "Value can fall before you lose money",
        `about ${Math.abs(valueFall * 100).toFixed(0)}%`
      ]);
    rows.push([]);
    rows.push(["Stress test", ...gridRates.map((g2) => `${fmtRate(g2)}%`)]);
    gridRows.forEach(
      (row) => rows.push([
        row.label,
        ...gridRates.map((g2) => money(scenario(g2, row.dv).net))
      ])
    );
    const csv = rows.map((r2) => r2.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "slicebase-scenario.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  const renderField = (def) => {
    const [label, value, setter, min, max] = def;
    return /* @__PURE__ */ jsxs("label", { children: [
      label,
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          inputMode: "decimal",
          min,
          max,
          step: "any",
          value,
          onChange: (e) => setter(e.target.value)
        }
      )
    ] }, label);
  };
  const pickedListings = LISTINGS.filter((l) => picked.includes(l.id));
  return /* @__PURE__ */ jsxs("div", { className: "sb", children: [
    /* @__PURE__ */ jsxs("div", { className: "sb-bg", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("div", { className: "sb-ribs" }),
      /* @__PURE__ */ jsx("div", { className: "sb-vignette" }),
      /* @__PURE__ */ jsx("div", { className: "sb-grain" })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "sb-nav", children: [
      /* @__PURE__ */ jsxs("div", { className: "sb-nav-bar", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "sb-brand",
            href: "#top",
            onClick: () => setMenuOpen(false),
            "aria-label": "Slicebase home",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "sb-brand-symbol",
                src: brandSymbol,
                alt: "Slicebase"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("nav", { className: "sb-nav-desktop", "aria-label": "Primary", children: [
          /* @__PURE__ */ jsx("a", { href: "#how", children: "How it works" }),
          /* @__PURE__ */ jsx("a", { href: "#income", children: "Calculator" }),
          /* @__PURE__ */ jsx("a", { href: "#faq", children: "FAQ" }),
          /* @__PURE__ */ jsx("a", { href: "#about", children: "About" })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "sb-nav-explore", href: "#compare", children: [
          "Compare listings ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            ref: menuButton,
            type: "button",
            className: "sb-menu-toggle",
            "aria-expanded": menuOpen,
            "aria-controls": "sb-mobile-menu",
            onClick: () => setMenuOpen(!menuOpen),
            children: [
              /* @__PURE__ */ jsx("span", { children: menuOpen ? "Close" : "Menu" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  viewBox: "0 0 20 20",
                  width: "20",
                  height: "20",
                  fill: "none",
                  "aria-hidden": "true",
                  children: menuOpen ? /* @__PURE__ */ jsx("path", { d: "m5 5 10 10M15 5 5 15" }) : /* @__PURE__ */ jsx("path", { d: "M3 7h14M3 13h14" })
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          id: "sb-mobile-menu",
          className: "sb-mobile-menu",
          "aria-label": "Mobile primary",
          hidden: !menuOpen,
          children: [
            /* @__PURE__ */ jsxs("a", { href: "#compare", onClick: () => setMenuOpen(false), children: [
              "Compare listings ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#how", onClick: () => setMenuOpen(false), children: "How it works" }),
            /* @__PURE__ */ jsx("a", { href: "#income", onClick: () => setMenuOpen(false), children: "Calculator" }),
            /* @__PURE__ */ jsx("a", { href: "#faq", onClick: () => setMenuOpen(false), children: "FAQ" }),
            /* @__PURE__ */ jsx("a", { href: "#about", onClick: () => setMenuOpen(false), children: "About" }),
            /* @__PURE__ */ jsx("p", { children: "Dated source records · Informational only" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("main", { id: "top", children: [
      /* @__PURE__ */ jsxs("section", { className: "sb-hero", children: [
        /* @__PURE__ */ jsxs("div", { className: "sb-hero-copy", children: [
          /* @__PURE__ */ jsx("p", { className: "sb-eyebrow sb-hero-eyebrow", children: "Independent comparison of tokenized real estate" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "A slice of ",
              /* @__PURE__ */ jsx("em", { children: "property." })
            ] }),
            /* @__PURE__ */ jsx("span", { children: "A clearer choice." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "sb-sub", children: "Compare tokenized properties across platforms. See the costs, terms and risks before you invest." }),
          /* @__PURE__ */ jsxs("div", { className: "sb-actions", children: [
            /* @__PURE__ */ jsxs("a", { className: "sb-btn sb-btn--solid", href: "#compare", children: [
              "Compare listings ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "sb-quiet-link", href: "#income", children: [
              "Run the numbers ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "sb-quiet-link", href: "#how", children: [
              "How it works ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sb-hero-visual", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "sb-sculpture",
              role: "img",
              "aria-label": "Abstract glass building made of horizontal slices, with one golden slice drawn out",
              children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 460 580", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsxs("defs", { children: [
                  /* @__PURE__ */ jsxs("linearGradient", { id: "glassTop", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#fff9df", stopOpacity: ".48" }),
                    /* @__PURE__ */ jsx("stop", { offset: ".5", stopColor: "#ffe2b0", stopOpacity: ".13" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#b3522c", stopOpacity: ".32" })
                  ] }),
                  /* @__PURE__ */ jsxs("linearGradient", { id: "glassFront", children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#43101a", stopOpacity: ".74" }),
                    /* @__PURE__ */ jsx("stop", { offset: ".48", stopColor: "#e88d55", stopOpacity: ".4" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#fff0c6", stopOpacity: ".55" })
                  ] }),
                  /* @__PURE__ */ jsxs("linearGradient", { id: "glassSide", children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#fff2d3", stopOpacity: ".5" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#54151e", stopOpacity: ".8" })
                  ] }),
                  /* @__PURE__ */ jsxs("linearGradient", { id: "sliceGold", children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#fff5c0" }),
                    /* @__PURE__ */ jsx("stop", { offset: ".5", stopColor: "#ffc76e" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#d66b31" })
                  ] }),
                  /* @__PURE__ */ jsxs("radialGradient", { id: "baseGlow", children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#491019", stopOpacity: ".7" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#491019", stopOpacity: "0" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "ellipse",
                  {
                    cx: "235",
                    cy: "513",
                    rx: "205",
                    ry: "48",
                    fill: "url(#baseGlow)"
                  }
                ),
                Array.from({ length: 14 }, (_, i) => {
                  const selected = i === 6;
                  const y = 72 + i * 25;
                  return /* @__PURE__ */ jsxs(
                    "g",
                    {
                      transform: `translate(${selected ? 64 : 0}, ${y})`,
                      className: selected ? "sb-pulled-slice" : "",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M62 45 L212 106 L306 52 L156 -9 Z",
                            fill: selected ? "url(#sliceGold)" : "url(#glassTop)",
                            stroke: selected ? "#ffe6a4" : "#ffeed5",
                            strokeOpacity: selected ? 0.95 : 0.48,
                            strokeWidth: ".8"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M62 45 L212 106 L212 124 L62 63 Z",
                            fill: selected ? "#df9e5a" : "url(#glassFront)",
                            stroke: "#ffecd3",
                            strokeOpacity: ".42",
                            strokeWidth: ".65"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M212 106 L306 52 L306 70 L212 124 Z",
                            fill: selected ? "#f4ba75" : "url(#glassSide)",
                            stroke: "#fff0d5",
                            strokeOpacity: ".52",
                            strokeWidth: ".65"
                          }
                        ),
                        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: `M${72 + n * 16} ${49 + n * 6.5} v18`,
                            stroke: "#fff4dc",
                            strokeOpacity: ".18",
                            strokeWidth: ".7"
                          },
                          n
                        )),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M212 106 L212 124",
                            stroke: "#fff7d9",
                            strokeOpacity: ".85",
                            strokeWidth: "1.3"
                          }
                        )
                      ]
                    },
                    i
                  );
                })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "sb-hero-value",
              href: "#coverage-notes",
              onClick: () => {
                const notes = document.getElementById("coverage-notes");
                if (notes instanceof HTMLDetailsElement) notes.open = true;
              },
              title: `Platform-published USD valuations for ${HERO_VALUE_STATS.count} currently indexed properties, excluding delisted records; partial catalogue, not assets managed.`,
              children: [
                /* @__PURE__ */ jsxs("span", { className: "sb-hero-value-title", children: [
                  /* @__PURE__ */ jsxs("strong", { children: [
                    "$",
                    (Math.floor(HERO_VALUE_STATS.total / 1e5) / 10).toFixed(1),
                    "M+"
                  ] }),
                  " ",
                  /* @__PURE__ */ jsx("span", { children: "tracked across properties" })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "sb-hero-value-scope", children: [
                  "Published property values · excludes delisted ",
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "↗" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "compare", className: "sb-section sb-directory", children: [
        /* @__PURE__ */ jsx("div", { className: "sb-directory-head", children: /* @__PURE__ */ jsxs("div", { className: "sb-head", children: [
          /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "The directory" }),
          /* @__PURE__ */ jsx("h2", { children: "Compare listings." }),
          /* @__PURE__ */ jsx("p", { className: "sb-section-sub", children: "Compare the price, return figure and resale terms. Select 2-3 listings to see them side by side." })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "sb-controls", children: [
          /* @__PURE__ */ jsxs("div", { className: "sb-control", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "f-platform", children: "Platform" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "f-platform",
                value: platform,
                onChange: (e) => setPlatform(e.target.value),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "all", children: "All platforms" }),
                  /* @__PURE__ */ jsx("option", { children: "Lofty" }),
                  /* @__PURE__ */ jsx("option", { children: "Oceanpoint" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sb-control", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "f-min", children: "Minimum up to" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "f-min",
                value: maxMin,
                onChange: (e) => setMaxMin(Number(e.target.value)),
                children: [
                  /* @__PURE__ */ jsx("option", { value: 1e4, children: "Any amount" }),
                  /* @__PURE__ */ jsx("option", { value: 50, children: "$50" }),
                  /* @__PURE__ */ jsx("option", { value: 100, children: "$100" }),
                  /* @__PURE__ */ jsx("option", { value: 500, children: "$500" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sb-control", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "f-sort", children: "Sort by" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "f-sort",
                value: sort,
                onChange: (e) => setSort(e.target.value),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "mixed", children: "Mixed listings" }),
                  /* @__PURE__ */ jsx("option", { value: "min", children: "Source order" }),
                  /* @__PURE__ */ jsx("option", { value: "name", children: "Listing name" }),
                  /* @__PURE__ */ jsx("option", { value: "platform", children: "Platform" }),
                  /* @__PURE__ */ jsx("option", { value: "yield", children: "Stated rent / value" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("details", { id: "coverage-notes", className: "sb-directory-data-notes", children: [
          /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsx("span", { children: "Coverage & data notes" }) }),
          /* @__PURE__ */ jsxs("p", { className: "sb-directory-notice", children: [
            "The hero total is ",
            compactMoney(HERO_VALUE_STATS.total),
            " in platform-published USD property valuations across ",
            HERO_VALUE_STATS.count,
            " indexed properties with values, excluding delisted records. It is not money invested or managed by Slicebase. Catalogue totals below include retained delisted records."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sb-index-banner", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: INDEX_STATS.listings }),
              /* @__PURE__ */ jsxs("span", { children: [
                "listings indexed across ",
                INDEX_STATS.platforms,
                " platforms"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: compactMoney(INDEX_STATS.totalValue) }),
              /* @__PURE__ */ jsxs("span", { children: [
                "platform-published valuations indexed (",
                INDEX_STATS.valueCount,
                " of ",
                INDEX_STATS.listings,
                " listings, USD)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "sb-index-note", children: [
            "Listings first captured ",
            CAPTURED,
            "; last refreshed ",
            REFRESHED,
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "sb-directory-notice", children: ELIGIBILITY_NOTE })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sb-result-line", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setPlatform("all");
              setMaxMin(1e4);
              setSort("mixed");
            },
            children: "Reset filters"
          }
        ) }),
        results.length === 0 ? /* @__PURE__ */ jsx("p", { className: "sb-empty", children: "No verified minimums match this filter. Reset to see the captured listings." }) : /* @__PURE__ */ jsx("div", { className: "sb-results", children: results.slice(0, visibleCount).map((l) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: `sb-property${picked.includes(l.id) ? " is-picked" : ""}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "sb-property-image", children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  decoding: "async",
                  width: "800",
                  height: "520",
                  src: photoByFile[l.photo],
                  alt: `${l.name}, photo from ${l.platform}`
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "sb-property-body", children: [
                /* @__PURE__ */ jsxs("div", { className: "sb-property-platform", children: [
                  /* @__PURE__ */ jsx("span", { children: l.platform }),
                  l.delisted && /* @__PURE__ */ jsx("span", { children: "No longer listed" })
                ] }),
                /* @__PURE__ */ jsx("h3", { children: l.name }),
                /* @__PURE__ */ jsx("p", { className: "sb-property-location", children: l.city }),
                /* @__PURE__ */ jsx("p", { className: "sb-card-status", children: liquidityFor(l).text }),
                /* @__PURE__ */ jsxs("dl", { className: "sb-property-metrics sb-card-headlines", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("dt", { children: l.platform === "Lofty" ? "Price per share" : "Property valuation" }),
                    /* @__PURE__ */ jsx("dd", { children: l.platform === "Lofty" ? l.quote.replace("/share", "") : l.valuation }),
                    /* @__PURE__ */ jsx("small", { children: l.platform === "Lofty" ? "Not the minimum order" : "Not the investment minimum" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("dt", { children: l.platform === "Lofty" && impliedYieldFor(l) != null ? "Annual rent / value" : `${l.yieldLabel} (${l.platform})` }),
                    /* @__PURE__ */ jsx("dd", { children: l.platform === "Lofty" && impliedYieldFor(l) != null ? `${impliedYieldFor(l).toFixed(2)}%` : l.yieldText }),
                    /* @__PURE__ */ jsx("small", { children: l.platform === "Lofty" && impliedYieldFor(l) != null ? "Annual rent ÷ property value" : "Platform-published figure" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("details", { className: "sb-card-details", children: [
                  /* @__PURE__ */ jsxs("summary", { children: [
                    "Property details ",
                    /* @__PURE__ */ jsx("span", { children: "Fees, resale & sources" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "sb-card-detail-content", children: [
                    /* @__PURE__ */ jsx(PropertyBadges, { listing: l }),
                    /* @__PURE__ */ jsxs("dl", { className: "sb-property-metrics sb-detail-metrics", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: l.platform === "Lofty" ? "Share price" : "Valuation" }),
                        /* @__PURE__ */ jsx("dd", { children: l.platform === "Lofty" ? l.quote : l.valuation })
                      ] }),
                      impliedYieldFor(l) != null && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Stated rent / value" }),
                        /* @__PURE__ */ jsxs("dd", { children: [
                          impliedYieldFor(l).toFixed(2),
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("dt", { children: [
                          l.yieldLabel,
                          " (platform's own)"
                        ] }),
                        /* @__PURE__ */ jsx("dd", { children: l.yieldText })
                      ] }),
                      l.platform === "Lofty" && loftyValueTag(l) && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Lofty value tag" }),
                        /* @__PURE__ */ jsx("dd", { children: loftyValueTag(l) })
                      ] }),
                      l.platform !== "Lofty" && l.asset && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Token" }),
                        /* @__PURE__ */ jsx("dd", { children: l.asset })
                      ] }),
                      l.platform === "Lofty" && l.valuation && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Property value (Lofty)" }),
                        /* @__PURE__ */ jsx("dd", { children: l.valuation })
                      ] }),
                      l.platform === "Lofty" && l.monthlyRent && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Monthly rent (Lofty)" }),
                        /* @__PURE__ */ jsx("dd", { children: l.monthlyRent })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "sb-yield-note", children: l.platform === "Lofty" ? "Rent / value = annual rent ÷ property value. Avg yield is Lofty's published figure." : "APY is Oceanpoint's published figure." }),
                    /* @__PURE__ */ jsx("dl", { className: "sb-property-terms", children: termsFor(l).map((t2) => /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("dt", { children: t2.label }),
                      /* @__PURE__ */ jsx("dd", { children: t2.value })
                    ] }, t2.label)) }),
                    /* @__PURE__ */ jsx(TermNotes, { listing: l }),
                    l.assetSource && /* @__PURE__ */ jsx("p", { className: "sb-source-line", children: /* @__PURE__ */ jsx(TextLink, { href: l.assetSource, children: "Token contract ↗" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "sb-property-actions", children: [
                  /* @__PURE__ */ jsx(JoinLink, { platform: l.platform }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "file-hover-underline",
                      onClick: () => openCalculator(l),
                      children: "Run the numbers ↗"
                    }
                  ),
                  /* @__PURE__ */ jsxs("label", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: picked.includes(l.id),
                        onChange: () => togglePick(l.id),
                        disabled: !picked.includes(l.id) && picked.length >= 3
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { children: picked.includes(l.id) ? "Selected" : "Compare" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "sb-referral-line sb-card-referral", children: "Referral link · We may earn a reward." })
              ] })
            ]
          },
          l.id
        )) }),
        visibleCount < results.length && /* @__PURE__ */ jsxs("div", { className: "sb-selection", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Showing ",
            Math.min(visibleCount, results.length),
            " of",
            " ",
            results.length,
            " results"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setVisibleCount((n) => n + 12),
              children: "Show more listings"
            }
          )
        ] }),
        picked.length > 0 && /* @__PURE__ */ jsxs(
          "div",
          {
            className: `sb-selection sb-compare-strip${picked.length ? " is-live" : ""}`,
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("strong", { children: [
                  picked.length,
                  " of 3 selected"
                ] }),
                /* @__PURE__ */ jsx("span", { children: picked.length < 2 ? "Choose 2-3 listings to compare." : "Compare the trade-offs, not just the yield." })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    disabled: picked.length < 2,
                    onClick: () => setCompareOpen(!compareOpen),
                    children: compareOpen ? "Hide comparison" : "Compare selected"
                  }
                ),
                picked.length > 0 && /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "sb-text-button",
                    onClick: () => {
                      setPicked([]);
                      setCompareOpen(false);
                    },
                    children: "Clear"
                  }
                )
              ] })
            ]
          }
        ),
        compareOpen && pickedListings.length >= 2 && /* @__PURE__ */ jsxs("div", { className: "sb-comparison", children: [
          /* @__PURE__ */ jsxs("div", { className: "sb-comparison-heading", children: [
            /* @__PURE__ */ jsx("h3", { ref: comparisonHeadingRef, tabIndex: -1, style: { scrollMarginTop: 24 }, children: "Your comparison" }),
            /* @__PURE__ */ jsx("p", { children: "No overall score. Lower entry cost does not mean lower risk." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sb-comparison-options", children: pickedListings.map((l) => /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsxs("p", { className: "sb-property-platform", children: [
              String(l.id).padStart(2, "0"),
              " · ",
              l.platform
            ] }),
            /* @__PURE__ */ jsx("h4", { children: l.name }),
            /* @__PURE__ */ jsxs("dl", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: l.platform === "Lofty" ? "Share price" : "Valuation" }),
                /* @__PURE__ */ jsx("dd", { children: l.platform === "Lofty" ? l.quote : l.valuation })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: l.platform === "Lofty" && impliedYieldFor(l) != null ? "Annual rent / value" : `${l.yieldLabel} (${l.platform})` }),
                /* @__PURE__ */ jsx("dd", { children: l.platform === "Lofty" && impliedYieldFor(l) != null ? `${impliedYieldFor(l).toFixed(2)}%` : l.yieldText })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Property type" }),
                /* @__PURE__ */ jsx("dd", { children: l.type })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Location" }),
                /* @__PURE__ */ jsx("dd", { children: l.city })
              ] }),
              termsFor(l).map((t2) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: t2.label }),
                /* @__PURE__ */ jsx("dd", { children: t2.value })
              ] }, t2.label))
            ] }),
            /* @__PURE__ */ jsx(TermNotes, { listing: l }),
            /* @__PURE__ */ jsx("p", { className: "sb-comparison-join", children: /* @__PURE__ */ jsx(JoinLink, { platform: l.platform }) }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => openCalculator(l), children: "Run the numbers ↗" }),
            /* @__PURE__ */ jsx(ReferralNote, {})
          ] }, l.id)) }),
          /* @__PURE__ */ jsx("p", { className: "sb-comparison-note", children: "Before choosing: verify total fees, occupancy assumptions, ownership rights, country restrictions and how you can sell. These are dated source records, not independently audited investments. Platform metric definitions differ; APY and avg yield are not directly comparable. A higher stated yield is not evidence of a better investment." })
        ] }),
        /* @__PURE__ */ jsxs(
          "section",
          {
            id: "income",
            ref: calculatorRef,
            className: "sb-calculator",
            "aria-labelledby": "calculator-title",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "sb-calculator-heading", children: [
                /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "Run the numbers" }),
                /* @__PURE__ */ jsx("h3", { id: "calculator-title", children: "What would you actually get back?" }),
                /* @__PURE__ */ jsx("p", { children: "See income and net outcome after the costs you enter. Change the assumptions to understand the trade-offs, not predict returns." }),
                /* @__PURE__ */ jsxs("details", { className: "sb-calc-notes", children: [
                  /* @__PURE__ */ jsx("summary", { children: "(i) What this uses" }),
                  /* @__PURE__ */ jsx("p", { children: "Start from an investment amount, or work back from a monthly goal. Where the selected listing publishes rent and a value, the rate starts at that stated rent / value ratio - platform-stated, as published, not a forecast - and otherwise at an 8% example. Platform avg-yield metrics are never used as the income rate. Platform-stated fees are included by default; turn them off below to see income before fees. Nothing here is a prediction or advice; it is arithmetic on your inputs." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sb-calculator-layout", children: [
                /* @__PURE__ */ jsxs("div", { className: "sb-calculator-inputs", children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "sb-calc-mode",
                      role: "group",
                      "aria-label": "Calculator mode",
                      children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            type: "button",
                            "aria-pressed": calcMode === "invest",
                            onClick: () => setCalcMode("invest"),
                            children: "From an investment"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            type: "button",
                            "aria-pressed": calcMode === "goal",
                            onClick: () => setCalcMode("goal"),
                            children: "Toward a monthly goal"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { className: "sb-calc-property", children: /* @__PURE__ */ jsx(
                    "select",
                    {
                      "aria-label": "Choose a listing for calculator inputs",
                      value: calcId,
                      onChange: (e) => {
                        const l = LISTINGS.find(
                          (x) => x.id === Number(e.target.value)
                        );
                        applyListing(l);
                      },
                      children: LISTINGS.map((l) => /* @__PURE__ */ jsx("option", { value: l.id, children: l.name }, l.id))
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("fieldset", { className: "sb-calc-group", children: [
                    /* @__PURE__ */ jsx("legend", { children: "1. Your investment" }),
                    (calcMode === "invest" ? [
                      ["Investment ($)", amount, setAmount, "1", "100000000"],
                      [
                        "Annual income rate (%)",
                        rate,
                        (v) => {
                          setRate(v);
                          setRateEdited(true);
                        },
                        "0",
                        "100"
                      ],
                      ["Holding period (years)", years, setYears, "1", "30"]
                    ] : [
                      [
                        "Monthly income goal ($)",
                        goal,
                        setGoal,
                        "1",
                        "1000000"
                      ],
                      [
                        "Annual income rate (%)",
                        rate,
                        (v) => {
                          setRate(v);
                          setRateEdited(true);
                        },
                        "0",
                        "100"
                      ]
                    ]).map((f2) => renderField(f2)),
                    impliedYield != null && /* @__PURE__ */ jsxs("p", { className: "sb-calc-rate-hint", children: [
                      "This listing's stated rent / value is",
                      " ",
                      impliedYield.toFixed(2),
                      "% - platform-stated, as published (rent before any management or other costs; add those under Annual costs), not a forecast. The field shows it rounded to 2 decimals; the exact ratio is used until you edit the rate, and is listed in Assumptions and calculation."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("fieldset", { className: "sb-calc-group", children: [
                    /* @__PURE__ */ jsx("legend", { children: "2. Fees and costs" }),
                    calcMode === "invest" && /* @__PURE__ */ jsx("div", { className: "sb-calc-fees", children: /* @__PURE__ */ jsxs("label", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: includeFees,
                          onChange: (e) => setIncludeFees(e.target.checked)
                        }
                      ),
                      /* @__PURE__ */ jsxs("span", { children: [
                        "Include ",
                        calcListing.platform,
                        "'s stated transaction fees: ",
                        calcFees.buyPct,
                        "% buy +",
                        " ",
                        calcFees.sellPct,
                        "% sell",
                        validCalc && includeFees ? ` (about ${money(base.buyFee + base.sellFee)} on ${money(a)})` : "",
                        "."
                      ] })
                    ] }) }),
                    calcMode === "invest" && calcListing.platform === "Lofty" && /* @__PURE__ */ jsxs("label", { className: "sb-calc-check", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: includeMarketFee,
                          onChange: (e) => setIncludeMarketFee(e.target.checked)
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { children: "Include Lofty's 2.5% market-order fee (market orders only)." })
                    ] }),
                    (calcMode === "invest" ? [
                      ["Upfront costs ($)", upfront, setUpfront, "0", "100000000"],
                      ["Annual costs ($)", annualFees, setAnnualFees, "0", "100000000"]
                    ] : [
                      ["Annual costs ($)", annualFees, setAnnualFees, "0", "100000000"]
                    ]).map((f2) => renderField(f2))
                  ] }),
                  /* @__PURE__ */ jsxs("fieldset", { className: "sb-calc-group", children: [
                    /* @__PURE__ */ jsx("legend", { children: "3. Assumptions" }),
                    [
                      ["Tax rate on income (%, optional)", taxRate, setTaxRate, "0", "99"]
                    ].map((f2) => renderField(f2)),
                    calcMode === "invest" && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsxs("label", { className: "sb-calc-check", children: [
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: sellAtEnd,
                            onChange: (e) => setSellAtEnd(e.target.checked)
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { children: "Sell at the end of the period - includes the stated sell fee and the sale proceeds." })
                      ] }),
                      [
                        [
                          "Compare with leaving it at (% a year, optional)",
                          compareRate,
                          setCompareRate,
                          "0",
                          "100"
                        ]
                      ].map((f2) => renderField(f2)),
                      /* @__PURE__ */ jsxs("div", { className: "sb-calc-chips", children: [
                        /* @__PURE__ */ jsx("span", { children: "Editable examples, not current rates:" }),
                        " ",
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setCompareRate("4"),
                            children: "Savings 4%"
                          }
                        ),
                        " ",
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setCompareRate("5"),
                            children: "Bond 5%"
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  calcMode === "invest" ? /* @__PURE__ */ jsx("p", { children: "No reinvestment or compounding is included, and the value is assumed unchanged unless a scenario below says otherwise. Income can fall to zero and capital can be lost. The cost fields stay at $0 unless you know of extra costs; platform transaction fees are already included unless you turn them off. Enter only costs not already counted, to avoid counting them twice." }) : /* @__PURE__ */ jsx("p", { children: "Goal mode works backward from your target: the same rate assumption, solved for the investment instead. The results are estimates, not a plan or a forecast. Income can fall to zero and capital can be lost. Upfront costs are not included; add them separately." })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "sb-calculator-output", "aria-live": "polite", children: calcMode === "goal" ? validGoal ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Capital needed to target ",
                    money(g),
                    " per month",
                    tn > 0 ? " after tax" : "",
                    ", after annual costs"
                  ] }),
                  /* @__PURE__ */ jsxs("table", { className: "sb-calc-table", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("th", { children: "Annual income rate" }),
                      /* @__PURE__ */ jsx("th", { children: "Capital needed" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: goalRates.map((grr, i) => /* @__PURE__ */ jsxs("tr", { className: i === 1 ? "is-base" : "", children: [
                      /* @__PURE__ */ jsxs("td", { children: [
                        grr.toFixed(1),
                        "%",
                        i === 1 ? " (your rate)" : ""
                      ] }),
                      /* @__PURE__ */ jsx("td", { children: money((goalGrossNeeded + gf) * 100 / grr) })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "At ",
                    money(goalInvestment),
                    ", ",
                    calcListing.platform,
                    "'s stated buy + sell fees would total about",
                    " ",
                    money(
                      goalInvestment * (calcFees.buyPct + calcFees.sellPct) / 100
                    ),
                    " ",
                    "across a purchase and a later sale at the same value. Estimate only - the rate is your own assumption; income can fall to zero and capital can be lost."
                  ] })
                ] }) : /* @__PURE__ */ jsx("p", { role: "alert", children: "Enter a positive monthly goal, a rate above 0 and up to 100% and non-negative annual costs." }) : validCalc ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    sellAtEnd ? "Net result after costs and fees, if sold at end" : "Net income after costs and fees",
                    " ",
                    "- over ",
                    t,
                    " ",
                    t === 1 ? "year" : "years"
                  ] }),
                  /* @__PURE__ */ jsx("strong", { children: money(base.net) }),
                  /* @__PURE__ */ jsxs("p", { className: "sb-calc-sentence", children: [
                    calcListing.name,
                    " · ",
                    t,
                    "-year scenario at ",
                    fmtRate(rUse),
                    "% income.",
                    sellAtEnd ? " Assumes a sale at the same property value." : " No sale assumed; you still own the principal."
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "sb-calc-liquidity", children: "A secondary market doesn't guarantee a buyer or your price." }),
                  /* @__PURE__ */ jsxs("div", { className: "sb-calc-tiles", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { children: "You put in" }),
                      /* @__PURE__ */ jsx("strong", { children: money(base.totalIn) }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        money(a),
                        base.buyFee > 0 ? ` + ${money(base.buyFee)} stated buy fee` : ""
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { children: "You get back" }),
                      /* @__PURE__ */ jsx("strong", { children: money(base.totalBack) }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        money(base.periodIncome),
                        " income",
                        sellAtEnd ? ` + ${money(base.saleNet)} sale proceeds after the stated sell fee` : ""
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { children: "Annualized net" }),
                      /* @__PURE__ */ jsxs("strong", { children: [
                        annualizedNet.toFixed(1),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        "simple average on the money actually in, vs the",
                        " ",
                        fmtRate(r),
                        "% entered rate",
                        irrNet != null ? `; counting when income arrives gives roughly ${irrNet.toFixed(1)}%` : ""
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("dl", { children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("dt", { children: "Average monthly income, before transaction fees" }),
                      /* @__PURE__ */ jsx("dd", { children: money(base.annualNet / 12) })
                    ] }),
                    breakEvenMonths != null && oneTimeCosts > 0 && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("dt", { children: "Fee break-even" }),
                      /* @__PURE__ */ jsxs("dd", { children: [
                        "about ",
                        Math.round(breakEvenMonths),
                        " months of income covers the full buy + sell fees",
                        u > 0 ? " and upfront costs" : ""
                      ] })
                    ] }),
                    sellAtEnd && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("dt", { children: "Value sensitivity" }),
                      /* @__PURE__ */ jsxs("dd", { children: [
                        "every 10% change in property value moves this result by about ",
                        money(sensitivity10)
                      ] })
                    ] }),
                    sellAtEnd && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("dt", { children: "Value can fall before you lose money" }),
                      /* @__PURE__ */ jsx("dd", { children: valueFall != null && valueFall < 0 ? `about ${Math.abs(valueFall * 100).toFixed(0)}%` : valueFall != null ? "nothing - this scenario loses money even if the value is unchanged" : "income alone already covers what you put in" })
                    ] }),
                    validCmp && cmpGain != null && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("dt", { children: [
                        "vs. leaving it at ",
                        cmpNum,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxs("dd", { children: [
                        "that earns about ",
                        money(cmpGain),
                        " -",
                        " ",
                        money(Math.abs(base.net - cmpGain)),
                        " ",
                        base.net >= cmpGain ? "less" : "more",
                        " than this scenario"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("details", { className: "sb-fee-details", children: [
                    /* @__PURE__ */ jsx("summary", { children: "Fee details" }),
                    /* @__PURE__ */ jsxs("dl", { children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("dt", { children: [
                          "Buy fee (",
                          buyEff,
                          "% of ",
                          money(a),
                          ")"
                        ] }),
                        /* @__PURE__ */ jsx("dd", { children: money(base.buyFee) })
                      ] }),
                      sellAtEnd && /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("dt", { children: [
                          "Sell fee (",
                          sellEff,
                          "% of ",
                          money(base.saleValue),
                          ")"
                        ] }),
                        /* @__PURE__ */ jsx("dd", { children: money(base.sellFee) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Platform fees total" }),
                        /* @__PURE__ */ jsx("dd", { children: money(base.buyFee + base.sellFee) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("dt", { children: "Your costs (upfront + annual)" }),
                        /* @__PURE__ */ jsx("dd", { children: money(u + f * t) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("p", { children: calcFees.note })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Monthly average is not a payout schedule. Fees and upfront costs are one-time; they reduce the result, not the income rate." }),
                  /* @__PURE__ */ jsxs("div", { className: "sb-calc-next", children: [
                    calcListing.source && /* @__PURE__ */ jsxs(
                      "a",
                      {
                        className: "sb-calc-next-primary",
                        href: calcListing.source,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          "Check this listing on ",
                          calcListing.platform,
                          " ↗ (direct link)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("button", { type: "button", onClick: compareAnother, children: "Compare with another listing" }),
                    /* @__PURE__ */ jsx("button", { type: "button", onClick: copyScenarioLink, children: copied ? "Copied" : "Copy link to this scenario" }),
                    /* @__PURE__ */ jsx("button", { type: "button", onClick: downloadCsv, children: "Download CSV" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "sb-calc-next-note", children: "The listing link is direct, with no referral. Join links on this site are referral links - we may earn a reward." })
                ] }) : /* @__PURE__ */ jsx("p", { role: "alert", children: "Enter a positive investment, a rate from 0-100%, a period from 1-30 years and non-negative costs." }) })
              ] }),
              calcMode === "invest" && validCalc && /* @__PURE__ */ jsxs("details", { className: "sb-calc-scenarios sb-secondary-details", children: [
                /* @__PURE__ */ jsxs("summary", { children: [
                  "Explore the stress test: ",
                  t,
                  "-year net on ",
                  money(a)
                ] }),
                /* @__PURE__ */ jsx("div", { className: "sb-calc-table-wrap", children: /* @__PURE__ */ jsxs("table", { className: "sb-calc-table", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", {}),
                    gridRates.map((grr, i) => {
                      const isUser = Math.abs(grr - rUse) < 5e-3;
                      const isListing = impliedYield != null && Math.abs(grr - impliedYield) < 5e-3;
                      return /* @__PURE__ */ jsxs("th", { children: [
                        "Income at ",
                        fmtRate(grr),
                        "%",
                        isListing ? " (listing-stated*)" : isUser ? " (your rate)" : ""
                      ] }, i);
                    })
                  ] }) }),
                  /* @__PURE__ */ jsx("tbody", { children: gridRows.map((row) => /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: row.label }),
                    gridRates.map((grr, i) => {
                      const v = scenario(grr, row.dv).net;
                      const cls = [
                        Math.abs(grr - r) < 5e-3 && row.dv === 0 ? "is-base" : "",
                        v < 0 ? "neg" : ""
                      ].join(" ").trim();
                      return /* @__PURE__ */ jsx("td", { className: cls || void 0, children: money(v) }, i);
                    })
                  ] }, row.label)) })
                ] }) }),
                /* @__PURE__ */ jsxs("p", { children: [
                  impliedYield != null ? `*The starred column is the selected listing's stated rent vs its published value (source ratio ${impliedYield.toFixed(4)}%, displayed rounded to ${(Math.round(impliedYield * 100) / 100).toFixed(2)}%; the exact ratio is used until you edit the rate), platform-stated and not a forecast. ` : "",
                  "Scenario illustrations from your inputs and the stated fees. Informational only, not investment advice."
                ] })
              ] }),
              calcMode === "invest" && validCalc && seriesMid.length > 1 && /* @__PURE__ */ jsxs("figure", { className: "sb-calc-chart", children: [
                /* @__PURE__ */ jsxs("figcaption", { children: [
                  "Your cumulative net over ",
                  t,
                  " ",
                  t === 1 ? "year" : "years",
                  " ",
                  "at your ",
                  fmtRate(r),
                  "% rate, with three outcomes marked at sale: value down ",
                  cvNum,
                  "%, unchanged, up ",
                  cvNum,
                  "%. The start counts the stated buy fee and any upfront costs; the stated sell fee and any value change apply at sale, in the last step."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "sb-chart-frame", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      viewBox: "0 0 560 210",
                      role: "img",
                      "aria-label": "Line chart of the cumulative net position over time, starting below zero at the up-front costs; the property-value change applies at sale, shown as a spread of three outcomes at the end",
                      onMouseMove: (e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const fx = (e.clientX - rect.left) / rect.width * 560;
                        const n = seriesMid.length;
                        const mi = Math.min(
                          Math.max(
                            Math.round((fx - 44) / (560 - 44 - 110) * (n - 1)),
                            0
                          ),
                          n - 1
                        );
                        setChartTip({ i: mi, px: e.clientX - rect.left });
                      },
                      onMouseLeave: () => setChartTip(null),
                      children: (() => {
                        const W = 560;
                        const H = 210;
                        const PL = 44;
                        const PR = 110;
                        const PT = 14;
                        const PB = 26;
                        const n = seriesMid.length;
                        const all = [...seriesLow, ...seriesHigh, 0];
                        const lo = Math.min(...all);
                        const hi = Math.max(...all);
                        const rawSpan = hi - lo || 1;
                        const rawStep = rawSpan / 3;
                        const mag = Math.pow(
                          10,
                          Math.floor(Math.log10(rawStep))
                        );
                        const step = Math.ceil(rawStep / mag) * mag;
                        let top = Math.ceil(hi / step) * step;
                        if (top <= hi) top += step;
                        const span = top - lo;
                        const X = (ii) => PL + ii / (n - 1) * (W - PL - PR);
                        const Y = (v) => H - PB - (v - lo) / span * (H - PT - PB);
                        const pts = (arr) => arr.map((v, ii) => `${X(ii)},${Y(v)}`).join(" ");
                        const areaD = "M " + pts(seriesMid).split(" ").join(" L ") + ` L ${X(n - 1)},${H - PB} L ${X(0)},${H - PB} Z`;
                        const yTicks = [];
                        for (let v = Math.ceil(lo / step) * step; v <= top; v += step) {
                          const rv = Math.round(v * 100) / 100;
                          if (!(lo < 0 && rv === 0)) yTicks.push(rv);
                        }
                        const xTicks = [];
                        for (let yr = 0; yr <= t; yr++)
                          xTicks.push({ ii: yr * (n - 1) / t, yr });
                        const shortD = (v) => `$${Math.round(v)}`;
                        return /* @__PURE__ */ jsxs(Fragment, { children: [
                          yTicks.map((v) => /* @__PURE__ */ jsxs("g", { children: [
                            /* @__PURE__ */ jsx(
                              "line",
                              {
                                className: "axis",
                                x1: PL,
                                x2: W - PR,
                                y1: Y(v),
                                y2: Y(v)
                              }
                            ),
                            /* @__PURE__ */ jsx("text", { x: PL - 5, y: Y(v) + 3, textAnchor: "end", children: shortD(v) })
                          ] }, v)),
                          xTicks.map(({ ii, yr }) => /* @__PURE__ */ jsxs("text", { x: X(ii), y: H - 8, textAnchor: "middle", children: [
                            yr,
                            "y"
                          ] }, yr)),
                          lo < 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(
                              "line",
                              {
                                className: "zero",
                                x1: PL,
                                x2: W - PR,
                                y1: Y(0),
                                y2: Y(0)
                              }
                            ),
                            /* @__PURE__ */ jsx("text", { x: PL - 5, y: Y(0) + 3, textAnchor: "end", children: "$0" })
                          ] }),
                          /* @__PURE__ */ jsx("path", { className: "area", d: areaD }),
                          /* @__PURE__ */ jsx("polyline", { className: "line", points: pts(seriesMid) }),
                          /* @__PURE__ */ jsx(
                            "circle",
                            {
                              className: "end-dot",
                              cx: X(0),
                              cy: Y(seriesMid[0]),
                              r: 3.5
                            }
                          ),
                          /* @__PURE__ */ jsxs(
                            "text",
                            {
                              className: "start-lab",
                              x: X(0) + 8,
                              y: Y(seriesMid[0]) + 3,
                              children: [
                                /* @__PURE__ */ jsx("tspan", { className: "end-lab", children: "Start " }),
                                /* @__PURE__ */ jsx("tspan", { className: "end-val", children: money(seriesMid[0]) }),
                                seriesMid[0] < 0 && /* @__PURE__ */ jsx("tspan", { className: "end-lab", children: " up front" })
                              ]
                            }
                          ),
                          cvNum > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(
                              "polyline",
                              {
                                className: "fan",
                                points: `${X(n - 2)},${Y(seriesMid[n - 2])} ${X(n - 1)},${Y(seriesHigh[n - 1])}`
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "polyline",
                              {
                                className: "fan",
                                points: `${X(n - 2)},${Y(seriesMid[n - 2])} ${X(n - 1)},${Y(seriesLow[n - 1])}`
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "line",
                              {
                                className: "spread",
                                x1: X(n - 1),
                                x2: X(n - 1),
                                y1: Y(seriesHigh[n - 1]),
                                y2: Y(seriesLow[n - 1])
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsx(
                            "circle",
                            {
                              className: "end-dot",
                              cx: X(n - 1),
                              cy: Y(seriesMid[n - 1]),
                              r: 4
                            }
                          ),
                          cvNum > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(
                              "circle",
                              {
                                className: "end-dot end-dot-alt",
                                cx: X(n - 1),
                                cy: Y(seriesHigh[n - 1]),
                                r: 3.5
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "circle",
                              {
                                className: "end-dot end-dot-alt",
                                cx: X(n - 1),
                                cy: Y(seriesLow[n - 1]),
                                r: 3.5
                              }
                            )
                          ] }),
                          beMonth != null && /* @__PURE__ */ jsxs("g", { children: [
                            /* @__PURE__ */ jsx(
                              "circle",
                              {
                                className: "dot",
                                cx: X(beMonth),
                                cy: Y(0),
                                r: 3.5
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "polyline",
                              {
                                className: "leader",
                                points: `${X(beMonth)},${Y(0) - 4} ${Math.min(X(beMonth) + 12, W - PR - 148)},${Math.max(Y(0) - 16, PT + 6)}`
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "rect",
                              {
                                className: "be-chip",
                                x: Math.min(X(beMonth) + 14, W - PR - 146) - 3,
                                y: Math.max(Y(0) - 16, PT + 6) - 5,
                                width: "150",
                                height: "12",
                                rx: "2"
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "text",
                              {
                                className: "be-note",
                                x: Math.min(X(beMonth) + 14, W - PR - 146),
                                y: Math.max(Y(0) - 16, PT + 6) + 4,
                                children: [
                                  "Up-front costs covered, about month",
                                  " ",
                                  Math.round(beMonth)
                                ]
                              }
                            )
                          ] }),
                          (() => {
                            const ends = [
                              ...cvNum > 0 ? [
                                {
                                  lab: `Up ${cvNum}%`,
                                  val: money(seriesHigh[n - 1]),
                                  y: Y(seriesHigh[n - 1])
                                }
                              ] : [],
                              {
                                lab: "Unchanged",
                                val: money(seriesMid[n - 1]),
                                y: Y(seriesMid[n - 1])
                              },
                              ...cvNum > 0 ? [
                                {
                                  lab: `Down ${cvNum}%`,
                                  val: money(seriesLow[n - 1]),
                                  y: Y(seriesLow[n - 1])
                                }
                              ] : []
                            ].sort((p, q) => p.y - q.y);
                            for (let k = 1; k < ends.length; k++)
                              if (ends[k].y < ends[k - 1].y + 12)
                                ends[k].y = ends[k - 1].y + 12;
                            return ends.map((e) => /* @__PURE__ */ jsxs("g", { children: [
                              /* @__PURE__ */ jsx(
                                "line",
                                {
                                  className: "end-leader",
                                  x1: X(n - 1) + 8,
                                  x2: W - PR + 16,
                                  y1: e.y,
                                  y2: e.y
                                }
                              ),
                              /* @__PURE__ */ jsxs("text", { x: W - 4, y: e.y + 3, textAnchor: "end", children: [
                                /* @__PURE__ */ jsxs("tspan", { className: "end-lab", children: [
                                  e.lab,
                                  " "
                                ] }),
                                /* @__PURE__ */ jsx("tspan", { className: "end-val", children: e.val })
                              ] })
                            ] }, e.lab));
                          })()
                        ] });
                      })()
                    }
                  ),
                  chartTip && /* @__PURE__ */ jsxs("div", { className: "sb-chart-tip", style: { left: chartTip.px }, children: [
                    chartTip.i === 0 ? "Start" : `Month ${chartTip.i}`,
                    " · down ",
                    money(seriesLow[chartTip.i]),
                    " · flat ",
                    money(seriesMid[chartTip.i]),
                    " · up",
                    " ",
                    money(seriesHigh[chartTip.i])
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "sb-chart-sliders", children: [
                  /* @__PURE__ */ jsxs("label", { children: [
                    "Holding period: ",
                    t,
                    " ",
                    t === 1 ? "year" : "years",
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "range",
                        min: "1",
                        max: "30",
                        step: "1",
                        value: t,
                        onChange: (e) => setYears(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("label", { children: [
                    "Value change to test: ±",
                    cvNum,
                    "%",
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "range",
                        min: "0",
                        max: "40",
                        step: "1",
                        value: cvNum,
                        onChange: (e) => setValueChg(e.target.value)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "sb-calc-chart-legend", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Start: ",
                    money(seriesMid[0])
                  ] }),
                  beMonth != null && /* @__PURE__ */ jsxs("span", { children: [
                    "Up-front costs covered: about month",
                    " ",
                    Math.round(beMonth)
                  ] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "End (flat): ",
                    money(seriesMid[seriesMid.length - 1])
                  ] }),
                  cvNum > 0 && /* @__PURE__ */ jsxs("span", { children: [
                    "Down ",
                    cvNum,
                    "%: ",
                    money(seriesLow[seriesLow.length - 1]),
                    " · Up ",
                    cvNum,
                    "%: ",
                    money(seriesHigh[seriesHigh.length - 1])
                  ] })
                ] })
              ] }),
              calcMode === "invest" && validCalc && pickedListings.length >= 2 && /* @__PURE__ */ jsxs("div", { className: "sb-calc-side", children: [
                /* @__PURE__ */ jsx("h4", { children: "Side by side: net outcome per listing" }),
                pickedListings.length >= 2 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "sb-calc-table-wrap", children: /* @__PURE__ */ jsxs("table", { className: "sb-calc-table", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("th", { children: "Listing" }),
                      /* @__PURE__ */ jsx("th", { children: "Stated fees" }),
                      /* @__PURE__ */ jsxs("th", { children: [
                        "Net at your ",
                        fmtRate(rUse),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsx("th", { children: "Net at stated rent/value" })
                    ] }) }),
                    /* @__PURE__ */ jsx("tbody", { children: pickedListings.map((l) => {
                      const lf = platformFeesFor(l);
                      const lMarket = l.platform === "Lofty" && includeMarketFee ? 2.5 : 0;
                      const lBuy = lf.buyPct + lMarket;
                      const lSell = lf.sellPct + lMarket;
                      const iy = impliedYieldFor(l);
                      return /* @__PURE__ */ jsxs("tr", { children: [
                        /* @__PURE__ */ jsx("td", { children: l.name }),
                        /* @__PURE__ */ jsxs("td", { children: [
                          lBuy,
                          "% buy + ",
                          lSell,
                          "% sell"
                        ] }),
                        /* @__PURE__ */ jsx("td", { children: money(scenario(rUse, 0, lBuy, lSell).net) }),
                        /* @__PURE__ */ jsx("td", { children: iy != null ? `${money(scenario(iy, 0, lBuy, lSell).net)} (${iy.toFixed(2)}%)` : "Figures not published" })
                      ] }, l.id);
                    }) })
                  ] }) }),
                  /* @__PURE__ */ jsx("p", { children: "Same investment, period, costs and toggles for each listing - only the platform's stated fees and the listing's stated rent/value ratio change. The stated-figure column is platform-stated, not a forecast. Informational only, not investment advice." })
                ] }) : /* @__PURE__ */ jsx("p", { children: "Tick 2-3 listings on the cards above to see their net outcome side by side here, on the same investment and settings." })
              ] }),
              /* @__PURE__ */ jsxs("details", { className: "sb-calculator-method", children: [
                /* @__PURE__ */ jsx("summary", { children: "Assumptions and calculation" }),
                /* @__PURE__ */ jsx("p", { children: "The calculator runs these exact formulas, line by line:" }),
                /* @__PURE__ */ jsxs("ol", { children: [
                  /* @__PURE__ */ jsx("li", { children: "Buy fee = investment × stated buy % (0 when fees are off)." }),
                  /* @__PURE__ */ jsx("li", { children: "Annual income = investment × rate ÷ 100 × (1 − tax % ÷ 100) − annual costs." }),
                  /* @__PURE__ */ jsx("li", { children: "Period income = annual income × years − upfront costs. Income is not reinvested; the rate stays constant." }),
                  /* @__PURE__ */ jsx("li", { children: "Sale value = investment × (1 + value change); sell fee = sale value × stated sell % (only when selling at the end)." }),
                  /* @__PURE__ */ jsx("li", { children: "You put in = investment + buy fee. You get back = period income + sale value − sell fee." }),
                  /* @__PURE__ */ jsx("li", { children: "Net when sold = you get back − you put in. Net when held = period income − buy fee (the principal is still owned)." }),
                  /* @__PURE__ */ jsx("li", { children: "Annualized net = net ÷ money in ÷ years (simple average). The timing-adjusted figure solves the monthly cash flows for the rate that nets them to zero, annualized as monthly rate × 12." }),
                  /* @__PURE__ */ jsx("li", { children: "Fee break-even months = (buy fee + sell fee + upfront costs) ÷ annual income × 12." }),
                  /* @__PURE__ */ jsx("li", { children: "Value can fall = (investment + buy fee − period income) ÷ (investment × (1 − sell % ÷ 100)) − 1." }),
                  /* @__PURE__ */ jsx("li", { children: "Goal mode: capital = (12 × monthly goal ÷ (1 − tax % ÷ 100) + annual costs) × 100 ÷ rate, shown at your rate ±2 points." })
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Stated rent / value = monthly rent x 12, divided by the listing's published value, from the listing's own figures. The exact source ratio (",
                  impliedYield != null ? `${impliedYield.toFixed(4)}%` : "3.9518%",
                  " ",
                  "for the selected listing) is displayed rounded to 2 decimals; the exact ratio is used in all math until you edit the rate."
                ] }),
                /* @__PURE__ */ jsx("p", { children: "Fees use the selected platform's stated percentages; Lofty's 2.5% market-order fee is optional and off by default. The stress table moves your rate ±2 points and adds the selected listing's stated rent / value at its exact ratio where published - platform-stated, never a forecast. The chart charges the buy fee and upfront costs up front and applies the sell fee at sale. Oceanpoint APY and Lofty avg yield are not treated as equivalent cash-income rates. The math lives in one tested function; the checks include this review's own numbers. Actual income can be lower or zero, and capital can be lost. Informational only, not investment advice." })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "how", className: "sb-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "sb-head", children: [
          /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "How it works" }),
          /* @__PURE__ */ jsx("h2", { children: "Compare. Calculate. Check." })
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "sb-steps", children: [
          /* @__PURE__ */ jsxs("li", { className: "sb-glass", children: [
            /* @__PURE__ */ jsx("span", { className: "sb-step-num", children: "01" }),
            /* @__PURE__ */ jsx("h3", { children: "Compare listings" }),
            /* @__PURE__ */ jsx("p", { children: "Select 2-3 properties. Compare price, the basis of each return figure, fees and resale terms." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "sb-glass", children: [
            /* @__PURE__ */ jsx("span", { className: "sb-step-num", children: "02" }),
            /* @__PURE__ */ jsx("h3", { children: "Estimate your income" }),
            /* @__PURE__ */ jsx("p", { children: "Set your investment, costs and holding period. Test how different assumptions change the net outcome." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "sb-glass", children: [
            /* @__PURE__ */ jsx("span", { className: "sb-step-num", children: "03" }),
            /* @__PURE__ */ jsx("h3", { children: "Check before you invest" }),
            /* @__PURE__ */ jsx("p", { children: "Confirm current availability, eligibility, ownership rights and exit rules with the platform before investing." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "faq", className: "sb-section sb-questions", children: [
        /* @__PURE__ */ jsxs("div", { className: "sb-question-intro", children: [
          /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "Before you choose" }),
          /* @__PURE__ */ jsxs("h2", { children: [
            "Straight",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "answers." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sb-question-list", children: [
          /* @__PURE__ */ jsxs("details", { open: faqOpen === 0, children: [
            /* @__PURE__ */ jsxs(
              "summary",
              {
                onClick: (event) => {
                  event.preventDefault();
                  setFaqOpen((current) => current === 0 ? null : 0);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sb-question-no", children: "01" }),
                  /* @__PURE__ */ jsx("span", { children: "Are these real investment listings?" }),
                  /* @__PURE__ */ jsx("span", { className: "sb-question-icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "sb-question-answer", children: /* @__PURE__ */ jsxs("p", { children: [
              "These records and photos were captured from Lofty and Oceanpoint's live marketplaces and refreshed on ",
              REFRESHED,
              ". They are dated records, not live offers or independently verified investment advice. Oceanpoint coverage is incomplete: ",
              N_OCEAN,
              " captured against ",
              meta.oceanpointReported,
              " reported. Check the source for current availability, terms and eligibility."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("details", { open: faqOpen === 1, children: [
            /* @__PURE__ */ jsxs(
              "summary",
              {
                onClick: (event) => {
                  event.preventDefault();
                  setFaqOpen((current) => current === 1 ? null : 1);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sb-question-no", children: "02" }),
                  /* @__PURE__ */ jsx("span", { children: "What does the calculator estimate?" }),
                  /* @__PURE__ */ jsx("span", { className: "sb-question-icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "sb-question-answer", children: /* @__PURE__ */ jsx("p", { children: "Cash income from the amount, annual rate, period and costs you enter. It assumes a constant rate and no reinvestment. It does not include taxes, currency changes or a future sale value, so it is not total investment return. Actual income can be lower or zero." }) })
          ] }),
          /* @__PURE__ */ jsxs("details", { open: faqOpen === 2, children: [
            /* @__PURE__ */ jsxs(
              "summary",
              {
                onClick: (event) => {
                  event.preventDefault();
                  setFaqOpen((current) => current === 2 ? null : 2);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sb-question-no", children: "03" }),
                  /* @__PURE__ */ jsx("span", { children: "Can I invest from my country?" }),
                  /* @__PURE__ */ jsx("span", { className: "sb-question-icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "sb-question-answer", children: /* @__PURE__ */ jsx("p", { children: "Lofty publishes 18+ / identity verification rules with sanctions and local-law restrictions. Oceanpoint requires an account and KYC for BSPTs and says some countries are unsupported. These are platform-wide rules, not an approval for you or every offering. Read the source notes on each card and confirm the specific offering's restrictions before investing." }) })
          ] }),
          /* @__PURE__ */ jsxs("details", { open: faqOpen === 3, children: [
            /* @__PURE__ */ jsxs(
              "summary",
              {
                onClick: (event) => {
                  event.preventDefault();
                  setFaqOpen((current) => current === 3 ? null : 3);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sb-question-no", children: "04" }),
                  /* @__PURE__ */ jsx("span", { children: "Does a higher yield mean a better investment?" }),
                  /* @__PURE__ */ jsx("span", { className: "sb-question-icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "sb-question-answer", children: /* @__PURE__ */ jsx("p", { children: "No. Compare the costs, rental assumptions, ownership rights and resale limits as well as yield. A stated yield is an estimate, not a guarantee. You can lose income and capital. Slicebase helps you compare; it does not provide personalized investment advice." }) })
          ] }),
          /* @__PURE__ */ jsxs("details", { open: faqOpen === 4, children: [
            /* @__PURE__ */ jsxs(
              "summary",
              {
                onClick: (event) => {
                  event.preventDefault();
                  setFaqOpen((current) => current === 4 ? null : 4);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sb-question-no", children: "05" }),
                  /* @__PURE__ */ jsx("span", { children: "Do I invest through Slicebase?" }),
                  /* @__PURE__ */ jsx("span", { className: "sb-question-icon", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "sb-question-answer", children: /* @__PURE__ */ jsx("p", { children: "No. Slicebase is an informational comparison directory. It does not accept investment deposits, hold tokens or execute investments. Any investment would be made directly with the platform, under its own terms." }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "about", className: "sb-section sb-info-page", children: [
        /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "About" }),
        /* @__PURE__ */ jsx("h2", { children: "What Slicebase is." }),
        /* @__PURE__ */ jsx("p", { className: "sb-info-text", children: "Slicebase is an independent directory for comparing tokenized real estate. We bring public listing information from Lofty and Oceanpoint into one place, so you can compare prices, platform stated fees, resale terms and access rules, then test your own assumptions with our calculator." }),
        /* @__PURE__ */ jsx("p", { className: "sb-info-text", children: "We provide information, not investment advice, and never hold your money or tokens. Any investment takes place outside Slicebase. We may earn a referral reward when you join a platform through our links; referral rewards do not affect listing order. Coverage is incomplete, so check current details with the platform before investing." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "sb-footer", children: [
      /* @__PURE__ */ jsxs("div", { className: "sb-footer-invite", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "sb-eyebrow", children: "A clearer starting point" }),
          /* @__PURE__ */ jsxs("h2", { children: [
            "See the whole picture.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { children: "Then choose your slice." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sb-footer-cta", children: /* @__PURE__ */ jsxs("a", { className: "sb-footer-action", href: "#compare", children: [
          "Compare listings ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sb-footer-info", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Independent by design.",
          /* @__PURE__ */ jsx("br", {}),
          "A comparison directory for tokenized real estate.",
          /* @__PURE__ */ jsx("br", {}),
          "No custody. No investment advice."
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Footer", children: [
          /* @__PURE__ */ jsx("a", { href: "#how", children: "How it works" }),
          /* @__PURE__ */ jsx("a", { href: "#income", children: "Calculator" }),
          /* @__PURE__ */ jsx("a", { href: "#faq", children: "FAQ" }),
          /* @__PURE__ */ jsx("a", { href: "#top", children: "Back to top ↑" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sb-footer-signature", children: [
        /* @__PURE__ */ jsx("img", { src: brandSymbol, alt: "" }),
        /* @__PURE__ */ jsx("span", { children: "Slicebase" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sb-footer-bottom sb-footer-legal", children: [
        /* @__PURE__ */ jsx("h3", { children: "Legal Disclaimer & Disclosure" }),
        /* @__PURE__ */ jsx("p", { children: "Slicebase is an independent informational directory, comparison engine and marketing affiliate. It is not an investment platform and does not provide brokerage, investment advisory or asset management services. Content, data and metrics are for information only, not financial, investment, legal or tax advice. Investments carry risk, including loss of capital." }),
        /* @__PURE__ */ jsx("p", { children: "Slicebase does not accept investment deposits, hold digital tokens, manage property deeds or execute transactions. Any investment, identity verification (KYC) or token issuance takes place outside Slicebase through the relevant platform and its services, subject to their own terms, eligibility rules and risks. Slicebase may earn referral or affiliate rewards when a visitor registers or transacts through its outbound links. Listing data may be incomplete and is not live pricing." }),
        /* @__PURE__ */ jsxs("ul", { "aria-label": "Platform role", children: [
          /* @__PURE__ */ jsx("li", { children: "No Asset Custody" }),
          /* @__PURE__ */ jsx("li", { children: "Pure Directory Model" }),
          /* @__PURE__ */ jsx("li", { children: "External Platform Links" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Analytics, {})
  ] });
}
function render() {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
