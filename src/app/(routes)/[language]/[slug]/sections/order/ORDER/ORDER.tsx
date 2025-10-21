"use client";

import { useEffect, useState } from "react";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { useFormik } from "formik";
import {
  INDUSTRY_ENUM,
  IOrder,
  ORDERS_INDUSTRY_OPTIONS,
} from "@/types/order.types";
import Field from "@/components/UI/Fields/Field";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cuboid from "@/components/UI/CuBoid/CuBoid";
import Controls from "@/components/UI/CuBoid/Controls/Controls";
import { ShowQuestion } from "@/utils/toast/Toast";
import { useMutation } from "@tanstack/react-query";
import { CreateOrderAPI } from "@/services/Orders/orders.services";
import useRedirect from "@/hooks/useRedirect";

const ORDER = () => {
  const { GoHome } = useRedirect();

  const { values, setFieldValue } = useFormik<IOrder>({
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
    onSubmit(values, formikHelpers) {},
  });

  const { mutate: CreateOrder } = useMutation({
    mutationFn: CreateOrderAPI,
    onSuccess(data, variables, onMutateResult, context) {
      GoHome();
    },
  });

  const { language } = useParams();

  const [gap, setGap] = useState(0);
  const [rotation, setRotation] = useState({ x: -33, y: 33 });
  const [perspective, setPerspective] = useState(1000);

  return (
    <PageContainer title='Order Form'>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.body}>
            <div className={styles.user}>
              <h1>اطلاعات کاربر</h1>
              <Field.Text
                name='user.name'
                icon={<Icon icon='icon-park-outline:edit-name' />}
                type='text'
                onChange={(value) => setFieldValue("user.name", value)}
                title='نام'
                value={values.user.name}
              />
              <Field.Text
                name='user.family'
                icon={<Icon icon='icon-park-solid:family' />}
                type='text'
                onChange={(value) => setFieldValue("user.family", value)}
                title='نام خانوادگی'
                value={values.user.family}
              />
              <Field.Text
                name='user.phone'
                icon={<Icon icon='line-md:phone-filled' />}
                type='number'
                onChange={(value) => setFieldValue("user.phone", value)}
                title='شماره همراه'
                value={values.user.phone}
              />

              <Field.Text
                name='user.email'
                icon={<Icon icon='line-md:email-alt-twotone' />}
                type='email'
                onChange={(value) => setFieldValue("user.email", value)}
                title='ایمیل'
                value={values.user.email}
              />

              <Field.Text
                name='companyName'
                icon={<Icon icon='mdi:company' />}
                type='text'
                onChange={(value) => setFieldValue("companyName", value)}
                title='شرکت'
                value={values.companyName}
              />
              <Field.Select
                options={ORDERS_INDUSTRY_OPTIONS}
                name='industry'
                icon={<Icon icon='mdi:company' />}
                type='text'
                onChange={(value) => setFieldValue("industry", value)}
                title='زمینه فعالیت'
                value={values.industry}
              />
            </div>

            <div className={styles.product}>
              <h1>اطلاعات محصول</h1>
              <Field.Text
                name='product.type'
                icon={<Icon icon='icon-park-outline:ad-product' />}
                type='text'
                onChange={(value) => setFieldValue("product.type", value)}
                title='نوع محصول'
                value={values.product.type}
              />
              <Field.Text
                name='product.weight'
                icon={<Icon icon='fa-solid:weight' />}
                type='number'
                onChange={(value) => setFieldValue("product.weight", value)}
                title='وزن محصول (گرم) '
                value={values.product.weight}
              />
              <Field.Text
                name='product.quantity'
                icon={<Icon icon='fluent:text-word-count-24-filled' />}
                type='number'
                onChange={(value) => setFieldValue("product.quantity", value)}
                title='تعداد سفارش'
                value={values.product.quantity}
              />
              <div style={{ gridColumn: "-1/1" }}>
                <Field.Image
                  name='product.image'
                  icon={<Icon icon='line-md:image-twotone' />}
                  type='text'
                  onChange={(file) => setFieldValue("product.image", file)}
                  title='عکس محصول'
                  value={values.product.image}
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
                    <h2>واحد اندازه گیری : میلی متر</h2>
                    <Field.Text
                      name='product.dimensions.length'
                      icon={<Icon icon='iconoir:truck-length' />}
                      type='number'
                      onChange={(value) =>
                        setFieldValue("product.dimensions.length", value)
                      }
                      title='طول ( میلی متر )'
                      value={values.product.dimensions.length}
                    />
                    <Field.Text
                      name='product.dimensions.width'
                      icon={<Icon icon='radix-icons:width' />}
                      type='number'
                      onChange={(value) =>
                        setFieldValue("product.dimensions.width", value)
                      }
                      title='عرض ( میلی متر )'
                      value={values.product.dimensions.width}
                    />
                    <Field.Text
                      name='product.dimensions.height'
                      icon={<Icon icon='ic:twotone-height' />}
                      type='number'
                      onChange={(value) =>
                        setFieldValue("product.dimensions.height", value)
                      }
                      title='ارتفاع ( میلی متر )'
                      value={values.product.dimensions.height}
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

            <div className={styles.descraption}>
              <Field.Text
                name='description'
                icon={<Icon icon='ic:twotone-height' />}
                type='text'
                onChange={(value) => setFieldValue("description", value)}
                title='توضیحات'
                multiLine={{
                  cols: 10,
                  rows: 5,
                }}
                value={values.description}
              />
            </div>
          </div>
          <div className={styles.actions}>
            <Button
              icon='none'
              title='ثبت سفارش'
              variant='primary'
              onClick={() => {
                ShowQuestion({
                  message: "آیا از ثبت سفارش اطمینان دارید ؟",
                  onConfirm() {
                    CreateOrder(values);
                  },
                  onCancel() {},
                });
              }}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ORDER;
