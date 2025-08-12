"use client";

import { useState } from "react";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
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
    <PageContainer title="Order Form">
      <div className={styles.form}>
        <h2>Order Form</h2>

        <div className={styles.top}>
          <div className={styles.Input}>
            <label>Order Number</label>
            <Input
              type="text"
              value={form.orderNumber}
              onChange={(val) => handleChange("orderNumber", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Order Date & Time</label>
            <Input
              type="text"
              value={form.orderDate}
              onChange={(val) => handleChange("orderDate", val)}
            />
          </div>
        </div>

        <div className={styles.names}>
          <div className={styles.Input}>
            <label>First Name</label>
            <Input
              type="text"
              value={form.firstName}
              onChange={(val) => handleChange("firstName", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Last Name</label>
            <Input
              type="text"
              value={form.lastName}
              onChange={(val) => handleChange("lastName", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Phone Number</label>
            <Input
              type="text"
              value={form.phone}
              onChange={(val) => handleChange("phone", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Company Name</label>
            <Input
              type="text"
              value={form.companyName}
              onChange={(val) => handleChange("companyName", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Industry</label>
            <Input
              type="select"
              value={form.industry}
              onChange={(val) => handleChange("industry", val)}
              options={[
                { value: "Food", name: "Food Industry" },
                { value: "Cosmetics", name: "Cosmetics Industry" },
                {
                  value: "Healthcare",
                  name: "Healthcare / Pharmaceutical Industry",
                },
                { value: "Other", name: "Other" },
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
            Send Type: Upload Image
          </label>
          <label>
            <input
              type="checkbox"
              checked={form.sendType.browser}
              onChange={() => handleSendTypeChange("browser")}
            />
            Show in Browser
          </label>
        </div>

        <div className={styles.product}>
          <div className={styles.Input}>
            <label>Product Type</label>
            <Input
              type="text"
              value={form.itemType}
              onChange={(val) => handleChange("itemType", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Product Weight (grams)</label>
            <Input
              type="text"
              value={form.itemWeight}
              onChange={(val) => handleChange("itemWeight", val)}
            />
          </div>

          <div className={styles.Input}>
            <label>Order Quantity</label>
            <Input
              type="text"
              value={form.itemCount}
              onChange={(val) => handleChange("itemCount", val)}
            />
          </div>
        </div>

        <div className={styles.sizes}>
          <div className={styles.Inputs}>
            <p>Product Dimensions:</p>
            <div className={styles.Input}>
              <label>Length (X)</label>
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
              <label>Width (Y)</label>
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
              <label>Height (Z)</label>
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
            height={form.dimensions.z}
            depth={form.dimensions.y}
          />
        </div>

        <Button
          icon="none"
          title="Submit Order"
          variant="primary"
          onClick={handleSubmit}
        />
      </div>
    </PageContainer>
  );
};

export default OrderForm;
