"use client";

import { useState } from "react";
import CubeCanvas from "@/components/UI/Cube/CubeCanvas";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";

const OrderForm = () => {
  const [form, setForm] = useState({
    orderNumber: "",
    orderDate: "",
    firstName: "",
    lastName: "",
    phone: "",
    companyName: "",
    industry: "",
    sendType: {
      upload: false,
      browser: false,
    },
    itemType: "",
    itemWeight: "",
    itemCount: "",
    dimensions: {
      x: 100,
      y: 20,
      z: 70,
    },
  });

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleDimensionChange = (
    axis: "x" | "y" | "z",
    value: number | null
  ) => {
    setForm((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [axis]: value,
      },
    }));
  };

  const handleSendTypeChange = (key: "upload" | "browser") => {
    setForm((prev) => ({
      ...prev,
      sendType: {
        ...prev.sendType,
        [key]: !prev.sendType[key],
      },
    }));
  };

  const handleSubmit = () => {
    console.log("فرم ثبت شد:", form);
  };

  return (
    <div className={styles.form}>
      <h2>فرم سفارش</h2>

      <div className={styles.top}>
        <div className={styles.Input}>
          <label>شماره سفارش</label>
          <Input
            type="text"
            value={form.orderNumber}
            onChange={(val) => handleChange("orderNumber", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>تاریخ و ساعت ثبت سفارش</label>
          <Input
            type="text"
            value={form.orderDate}
            onChange={(val) => handleChange("orderDate", val)}
          />
        </div>
      </div>

      <div className={styles.names}>
        <div className={styles.Input}>
          <label>نام</label>
          <Input
            type="text"
            value={form.firstName}
            onChange={(val) => handleChange("firstName", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>نام خانوادگی</label>
          <Input
            type="text"
            value={form.lastName}
            onChange={(val) => handleChange("lastName", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>شماره تماس</label>
          <Input
            type="text"
            value={form.phone}
            onChange={(val) => handleChange("phone", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>نام شرکت</label>
          <Input
            type="text"
            value={form.companyName}
            onChange={(val) => handleChange("companyName", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>زمینه فعالیت</label>
          <Input
            type="select"
            value={form.industry}
            onChange={(val) => handleChange("industry", val)}
            options={[
              { value: "غذایی", name: "صنایع غذایی" },
              { value: "آرایشی", name: "صنایع آرایشی" },
              { value: "بهداشتی", name: "صنایع بهداشتی-دارویی" },
              { value: "سایر", name: "سایر" },
            ]}
          />
        </div>
      </div>

      <div className={styles.checkboxGroup}>
        <label>
          <input
            type="checkbox"
            checked={form.sendType.upload}
            onChange={() => handleSendTypeChange("upload")}
          />
          نوع ارسال: آپلود عکس
        </label>
        <label>
          <input
            type="checkbox"
            checked={form.sendType.browser}
            onChange={() => handleSendTypeChange("browser")}
          />
          نمایش در مرورگر (Browser)
        </label>
      </div>

      <div className={styles.product}>
        <div className={styles.Input}>
          <label>نوع محصول</label>
          <Input
            type="text"
            value={form.itemType}
            onChange={(val) => handleChange("itemType", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>وزن محصول (گرم)</label>
          <Input
            type="text"
            value={form.itemWeight}
            onChange={(val) => handleChange("itemWeight", val)}
          />
        </div>

        <div className={styles.Input}>
          <label>تعداد سفارش</label>
          <Input
            type="text"
            value={form.itemCount}
            onChange={(val) => handleChange("itemCount", val)}
          />
        </div>
      </div>

      <div className={styles.sizes}>
        <div className={styles.Inputs}>
          <p>ابعاد محصول:</p>
          <div className={styles.Input}>
            <label>طول (X)</label>
            <Input
              type="text"
              value={
                Number.isNaN(form.dimensions.x)
                  ? ""
                  : form.dimensions.x.toString()
              }
              onChange={(val) => {
                const num = parseInt(val);
                handleDimensionChange("x", num);
              }}
            />
          </div>
          <div className={styles.Input}>
            <label>عرض (Y)</label>
            <Input
              type="text"
              value={
                Number.isNaN(form.dimensions.y)
                  ? ""
                  : form.dimensions.y.toString()
              }
              onChange={(val) => {
                const num = parseInt(val);
                handleDimensionChange("y", num);
              }}
            />
          </div>
          <div className={styles.Input}>
            <label>ارتفاع (Z)</label>
            <Input
              type="text"
              value={
                Number.isNaN(form.dimensions.z)
                  ? ""
                  : form.dimensions.z.toString()
              }
              onChange={(val) => {
                const num = parseInt(val);
                handleDimensionChange("z", num);
              }}
            />
          </div>
        </div>

        <CubeCanvas
          width={form.dimensions.x}
          height={form.dimensions.y}
          depth={form.dimensions.z}
        />
      </div>

      <Button
        icon="none"
        title="ارسال سفارش"
        variant="primary"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default OrderForm;
