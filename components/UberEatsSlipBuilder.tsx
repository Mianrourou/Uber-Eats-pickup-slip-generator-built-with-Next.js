"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Download } from "lucide-react";
import * as htmlToImage from "html-to-image";

export default function UberEatsSlipBuilder() {
  const [name, setName] = useState("Renee G.");
  const [orderNo, setOrderNo] = useState("#88971");
  const [items, setItems] = useState([
    { qty: "2", title: "Whole Wings platter" },
    { qty: "1", title: "Cheeseburger" },
  ]);
  const [scale, setScale] = useState(1);

  const cardRef = useRef<HTMLDivElement>(null);

  const addItem = () => setItems((s) => [...s, { qty: "1", title: "" }]);
  const removeItem = (i: number) =>
    setItems((s) => s.filter((_, idx) => idx !== i));

  const downloadPNG = async () => {
    if (!cardRef.current) return;
    const dataUrl = await htmlToImage.toPng(cardRef.current, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#f3f4f6",
    });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `order_${orderNo.replace(/#/g, "")}.png`;
    a.click();
  };

  const banner = (
    <div className="rounded-2xl bg-zinc-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold">Uber</span>
          <span className="text-emerald-600 font-semibold">Eats</span>
        </div>
        <div className="text-xs font-semibold tracking-wide text-zinc-700">{orderNo}</div>
      </div>
      <div className="pt-1.5 text-[22px] md:text-[24px] leading-none font-bold text-zinc-900 text-center">
        {name}
      </div>
    </div>
  );

  const header = (
    <div className="pt-3 pb-2 border-b border-zinc-200">
      <div className="text-[13px] tracking-[0.14em] text-zinc-900 text-center font-bold">
        pickup order
      </div>
      <div className="text-[11px] text-zinc-500 text-center mt-0.5">
        Show details to cashier
      </div>
    </div>
  );

  const listItem = (q: string, t: string, i: number) => (
    <div key={i} className="w-full">
      <div className="flex items-center gap-3 py-3">
        <div className="w-6 h-6 rounded-md bg-gray-200 grid place-items-center text-[12px] font-semibold text-zinc-900">
          {q}
        </div>
        <div className="text-[14px] leading-snug break-words text-zinc-900">{t || "—"}</div>
      </div>
    </div>
  );

  const cardInner = (
    <div
      ref={cardRef}
      className="mx-auto shadow-xl rounded-2xl bg-white overflow-hidden"
      style={{ width: 250 * scale, borderRadius: 16 }}
    >
      <div className="bg-white/70 w-full" style={{ height: 18 * scale }} />
      <div className="px-4" style={{ paddingTop: 8 * scale, paddingBottom: 8 * scale }}>
        {header}
        <div className="mt-3">{banner}</div>
        <div className="mt-3">
          {items.map((it, i) => listItem(it.qty, it.title, i))}
        </div>
        <div className="mt-4">
          <div className="rounded-lg bg-black text-white text-[13px] py-2 text-center font-medium">
            I got my order
          </div>
          <div className="text-center text-[13px] py-3 text-zinc-700">Close</div>
        </div>
      </div>
      <div className="bg-white/70 w-full" style={{ height: 18 * scale }} />
    </div>
  );

  return (
    <div className="p-6 grid lg:grid-cols-2 gap-6">
      <Card className="shadow-sm bg-black border-gray-600">
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-gray-300">Name</Label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="bg-black border-gray-600 text-gray-300 placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-gray-300">Order No.</Label>
              <Input 
                value={orderNo} 
                onChange={(e) => setOrderNo(e.target.value)} 
                className="bg-black border-gray-600 text-gray-300 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Items</Label>
              <Button size="sm" variant="default" onClick={addItem}>
                <Plus className="h-4 w-4 mr-1" /> Add Item
              </Button>
            </div>
            <div className="space-y-2">
              {items.map((it, i) => (
                <div key={i} className="grid grid-cols-[60px_1fr_36px] gap-2 items-center">
                  <Input
                    placeholder="Qty"
                    value={it.qty}
                    onChange={(e) => {
                      const v = e.target.value; const arr = [...items]; arr[i].qty = v; setItems(arr);
                    }}
                    className="bg-black border-gray-600 text-gray-300 placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Item title"
                    value={it.title}
                    onChange={(e) => {
                      const v = e.target.value; const arr = [...items]; arr[i].title = v; setItems(arr);
                    }}
                    className="bg-black border-gray-600 text-gray-300 placeholder:text-gray-500"
                  />
                  <Button variant="default" size="icon" onClick={() => removeItem(i)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Label className="min-w-[72px] text-gray-300">Scale</Label>
            <Input
              type="number"
              step="0.1"
              min="0.5"
              max="3"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value) || 1)}
              className="w-24 bg-black border-gray-600 text-gray-300"
            />
          </div>

          <div className="pt-2">
            <Button className="w-full" onClick={downloadPNG}>
              <Download className="h-4 w-4 mr-2" /> Download PNG
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid place-items-center">
        {cardInner}
      </div>
    </div>
  );
}
