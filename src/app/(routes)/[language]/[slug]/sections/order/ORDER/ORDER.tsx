"use client";

import { useState } from "react";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { FormikContext, useFormik } from "formik";
import {
  INDUSTRY_ENUM,
  IOrder,
  ORDERS_INDUSTRY_OPTIONS_EN,
  ORDERS_INDUSTRY_OPTIONS_FA,
} from "@/types/order.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cuboid from "@/components/UI/CuBoid/CuBoid";
import Controls from "@/components/UI/CuBoid/Controls/Controls";
import { ShowQuestion } from "@/utils/toast/Toast";
import { useMutation } from "@tanstack/react-query";
import { CreateOrderAPI } from "@/services/Orders/orders.services";
import useRedirect from "@/hooks/useRedirect";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { OrderValidationSchema } from "@/utils/validations/validations";
import Field from "@/components/UI/Fields/Field";

const ORDER = () => {
  const { language }: { language: LanguagesENUM } = useParams();

  const { GoHome } = useRedirect();

  const formik = useFormik<IOrder>({
    initialValues: {
      user: {
        name: "",
        family: "",
        phone: "",
        email: "",
      },
      companyName: "",
      industry: INDUSTRY_ENUM.OTHER,
      product: {
        image: undefined as any,
        type: "",
        weight: undefined as any,
        quantity: undefined as any,
        dimensions: {
          length: 170,
          width: 170,
          height: 170,
        },
      },
      description: "",
    },
    onSubmit(values, formikHelpers) {
      CreateOrder(values);
    },
    validationSchema: OrderValidationSchema[language],
    validateOnBlur: true,
    validateOnChange: false,
  });

  const { mutate: CreateOrder } = useMutation({
    mutationFn: CreateOrderAPI,
    onSuccess(data, variables, onMutateResult, context) {
      GoHome();
    },
  });

  const { values, setFieldValue, errors, submitForm } = formik;

  const [gap, setGap] = useState(0);
  const [rotation, setRotation] = useState({ x: -33, y: 33 });
  const [perspective, setPerspective] = useState(1000);

  const t = {
    FA: {
      pageTitle: "فرم سفارش",
      userInfo: "اطلاعات کاربر",
      firstName: "نام",
      lastName: "نام خانوادگی",
      phone: "شماره همراه",
      email: "ایمیل",
      company: "شرکت",
      industry: "زمینه فعالیت",
      productInfo: "اطلاعات محصول",
      productType: "نوع محصول",
      weight: "وزن محصول (گرم)",
      quantity: "تعداد سفارش",
      uploadImage: "عکس محصول",
      measurement: "واحد اندازه گیری : میلی متر",
      length: "طول (میلی متر)",
      width: "عرض (میلی متر)",
      height: "ارتفاع (میلی متر)",
      description: "توضیحات",
      submit: "ثبت سفارش",
      confirmMsg: "آیا از ثبت سفارش اطمینان دارید؟",
    },
    EN: {
      pageTitle: "Order Form",
      userInfo: "User Information",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      email: "Email",
      company: "Company",
      industry: "Industry",
      productInfo: "Product Information",
      productType: "Product Type",
      weight: "Product Weight (g)",
      quantity: "Order Quantity",
      uploadImage: "Product Image",
      measurement: "Measurement Unit: Millimeters",
      length: "Length (mm)",
      width: "Width (mm)",
      height: "Height (mm)",
      description: "Description",
      submit: "Submit Order",
      confirmMsg: "Are you sure you want to submit the order?",
    },
  }[language === LanguagesENUM.EN ? "EN" : "FA"];

  return (
    <PageContainer title={t.pageTitle}>
      <FormikContext value={formik}>
        <div className={styles.container}>
          <div className={styles.form}>
            <div className={styles.body}>
              {/* USER INFO */}
              <div className={styles.user}>
                <h1>{t.userInfo}</h1>
                <Field
                  name='user.name'
                  icon={<Icon icon='icon-park-outline:edit-name' />}
                  type='text'
                  onChange={(value) => setFieldValue("user.name", value)}
                  title={t.firstName}
                  value={values.user.name}
                  errors={errors}
                />
                <Field
                  name='user.family'
                  icon={<Icon icon='icon-park-solid:family' />}
                  type='text'
                  onChange={(value) => setFieldValue("user.family", value)}
                  title={t.lastName}
                  value={values.user.family}
                  errors={errors}
                />
                <Field
                  name='user.phone'
                  icon={<Icon icon='line-md:phone-filled' />}
                  type='number'
                  onChange={(value) => setFieldValue("user.phone", value)}
                  title={t.phone}
                  value={values.user.phone}
                  errors={errors}
                />
                <Field
                  name='user.email'
                  icon={<Icon icon='line-md:email-alt-twotone' />}
                  type='email'
                  onChange={(value) => setFieldValue("user.email", value)}
                  title={t.email}
                  value={values.user.email}
                  errors={errors}
                />
                <Field
                  name='companyName'
                  icon={<Icon icon='mdi:company' />}
                  type='text'
                  onChange={(value) => setFieldValue("companyName", value)}
                  title={t.company}
                  value={values.companyName}
                  errors={errors}
                />
                <Field
                  options={
                    language === LanguagesENUM.FA
                      ? ORDERS_INDUSTRY_OPTIONS_FA
                      : ORDERS_INDUSTRY_OPTIONS_EN
                  }
                  name='industry'
                  icon={<Icon icon='mdi:company' />}
                  type='select'
                  onChange={(value) => setFieldValue("industry", value)}
                  title={t.industry}
                  value={values.industry as any}
                  errors={errors}
                />
              </div>

              {/* PRODUCT INFO */}
              <div className={styles.product}>
                <h1>{t.productInfo}</h1>
                <Field
                  name='product.type'
                  icon={<Icon icon='icon-park-outline:ad-product' />}
                  type='text'
                  onChange={(value) => setFieldValue("product.type", value)}
                  title={t.productType}
                  value={values.product.type}
                  errors={errors}
                />
                <Field
                  name='product.weight'
                  icon={<Icon icon='fa-solid:weight' />}
                  type='number'
                  onChange={(value) => setFieldValue("product.weight", value)}
                  title={t.weight}
                  value={values.product.weight}
                  errors={errors}
                />
                <Field
                  name='product.quantity'
                  icon={<Icon icon='fluent:text-word-count-24-filled' />}
                  type='number'
                  onChange={(value) => setFieldValue("product.quantity", value)}
                  title={t.quantity}
                  value={values.product.quantity}
                  errors={errors}
                />

                <div style={{ gridColumn: "-1/1" }}>
                  <Field
                    name='product.image'
                    icon={<Icon icon='line-md:image-twotone' />}
                    type='image'
                    onChange={(file) => setFieldValue("product.image", file)}
                    title={t.uploadImage}
                    value={values.product.image}
                    errors={errors}
                  />
                </div>

                <div className={styles.sizes}>
                  <div
                    className={styles.cube}
                    style={{
                      width: "100%",
                      height:
                        values.product.dimensions.height > 200
                          ? "32rem"
                          : "20rem",
                    }}>
                    <Cuboid
                      depth={values.product.dimensions.length}
                      height={values.product.dimensions.height}
                      width={values.product.dimensions.width}
                      rotation={rotation}
                      gap={gap}
                      perspective={perspective}
                    />
                  </div>

                  <div className={styles.controls}>
                    <div className={styles.fiels}>
                      <h2>{t.measurement}</h2>
                      <Field
                        name='product.dimensions.length'
                        icon={<Icon icon='iconoir:truck-length' />}
                        type='number'
                        onChange={(value) =>
                          setFieldValue("product.dimensions.length", value)
                        }
                        title={t.length}
                        value={values.product.dimensions.length}
                        errors={errors}
                      />
                      <Field
                        name='product.dimensions.width'
                        icon={<Icon icon='radix-icons:width' />}
                        type='number'
                        onChange={(value) =>
                          setFieldValue("product.dimensions.width", value)
                        }
                        title={t.width}
                        value={values.product.dimensions.width}
                        errors={errors}
                      />
                      <Field
                        name='product.dimensions.height'
                        icon={<Icon icon='ic:twotone-height' />}
                        type='number'
                        onChange={(value) =>
                          setFieldValue("product.dimensions.height", value)
                        }
                        title={t.height}
                        value={values.product.dimensions.height}
                        errors={errors}
                      />
                    </div>
                    <Controls
                      debug
                      width={values.product.dimensions.width}
                      height={values.product.dimensions.height}
                      depth={values.product.dimensions.length}
                      rotation={rotation}
                      setWidth={(value) =>
                        setFieldValue("product.dimensions.width", value)
                      }
                      setHeight={(value) =>
                        setFieldValue("product.dimensions.height", value)
                      }
                      setDepth={(value) =>
                        setFieldValue("product.dimensions.length", value)
                      }
                      setRotation={setRotation}
                    />
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className={styles.descraption}>
                <Field
                  name='description'
                  icon={<Icon icon='ic:twotone-height' />}
                  type='text'
                  onChange={(value) => setFieldValue("description", value)}
                  title={t.description}
                  multiLine={{
                    cols: 10,
                    rows: 5,
                  }}
                  value={values.description}
                  errors={errors}
                />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className={styles.actions}>
              <Button
                icon='none'
                title={t.submit}
                variant='primary'
                onClick={() => {
                  ShowQuestion({
                    message: t.confirmMsg,
                    onConfirm() {
                      submitForm();
                    },
                    onCancel() {},
                  });
                }}
              />
            </div>
          </div>
        </div>
      </FormikContext>
    </PageContainer>
  );
};

export default ORDER;
