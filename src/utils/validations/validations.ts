import { INDUSTRY_ENUM } from "@/types/order.types";
import { IValidation } from "@/types/validation.types";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const OrderValidationSchema: IValidation = {
  FA: Yup.object({
    user: Yup.object({
      name: Yup.string().required("نام الزامی است"),
      family: Yup.string().required("نام خانوادگی الزامی است"),
      country: Yup.string().required("کشور الزامی است"),
      phone: Yup.string()
        .matches(phoneRegExp, "شماره موبایل اشتباه است")
        .required("شماره تماس الزامی است"),
      email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
    }).required(),

    companyName: Yup.string().required("نام شرکت الزامی است"),

    industry: Yup.mixed<INDUSTRY_ENUM>()
      .oneOf(Object.values(INDUSTRY_ENUM))
      .required("صنعت الزامی است"),

    product: Yup.object({
      image: Yup.mixed().required("آپلود تصویر محصول الزامی است"),

      type: Yup.string().required("نوع محصول الزامی است"),

      weight: Yup.number()
        .typeError("وزن باید عدد باشد")
        .positive("وزن باید عدد مثبت باشد")
        .required("وزن الزامی است"),

      quantity: Yup.number()
        .typeError("تعداد باید عدد باشد")
        .positive("تعداد باید عدد مثبت باشد")
        .required("تعداد الزامی است"),

      dimensions: Yup.object({
        length: Yup.number()
          .typeError("طول باید عدد باشد")
          .min(1, "کمتر از 1 نباشد")
          .required("طول الزامی است"),

        width: Yup.number()
          .typeError("عرض باید عدد باشد")
          .min(1, "کمتر از 1 نباشد")
          .required("عرض الزامی است"),

        height: Yup.number()
          .typeError("ارتفاع باید عدد باشد")
          .min(1, "کمتر از 1 نباشد")
          .required("ارتفاع الزامی است"),
      }).required(),
    }).required(),

    description: Yup.string()
      .max(1000, "حداکثر 1000 کاراکتر")
      .required("توضیحات الزامی است"),
  }),

  // ----------------------------------
  //          EN VERSION
  // ----------------------------------
  EN: Yup.object({
    user: Yup.object({
      name: Yup.string().required("First name is required"),
      family: Yup.string().required("Last name is required"),
      country: Yup.string().required("country is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "phone number not valid")
        .required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }).required(),

    companyName: Yup.string().required("Company name is required"),

    industry: Yup.mixed<INDUSTRY_ENUM>()
      .oneOf(Object.values(INDUSTRY_ENUM))
      .required("Industry is required"),

    product: Yup.object({
      image: Yup.mixed().nullable().required("Product image is required"),

      type: Yup.string().required("Product type is required"),

      weight: Yup.number()
        .typeError("Weight must be a number")
        .positive("Weight must be a positive number")
        .required("Weight is required"),

      quantity: Yup.number()
        .typeError("Quantity must be a number")
        .positive("Quantity must be a positive number")
        .required("Quantity is required"),

      dimensions: Yup.object({
        length: Yup.number()
          .typeError("Length must be a number")
          .min(1, "Length must be at least 1")
          .required("Length is required"),

        width: Yup.number()
          .typeError("Width must be a number")
          .min(1, "Width must be at least 1")
          .required("Width is required"),

        height: Yup.number()
          .typeError("Height must be a number")
          .min(1, "Height must be at least 1")
          .required("Height is required"),
      }).required(),
    }).required(),

    description: Yup.string()
      .max(1000, "Maximum length is 1000 characters")
      .required("Description is required"),
  }),
};

export const CareerApplySchema: IValidation = {
  FA: Yup.object({
    // ──────────────── BASIC FIELDS ────────────────
    career_id: Yup.string()
      .typeError("نوع داده نامعتبر است (string)")
      .required("الزامی است"),

    // ───────────── PERSONAL INFO (object) ─────────────
    personalInfo: Yup.object({
      fullName: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      nationalId: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .matches(/^\d{10}$/, "باید 10 رقمی باشد")
        .required("الزامی است"),

      birthDate: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      birthPlace: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      issuePlace: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      maritalStatus: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      militaryStatus: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      fatherName: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      fatherJob: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      insuranceHistory: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      phoneNumber: Yup.string()
        .matches(phoneRegExp, "شماره موبایل اشتباه است")
        .required("شماره تماس الزامی است"),
    })
      .typeError("personalInfo باید یک آبجکت باشد")
      .required("الزامی است"),

    // ─────────────── EDUCATION (array<object>) ───────────────
    education: Yup.array()
      .of(
        Yup.object({
          fieldOfStudy: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),

          level: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),

          gpa: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),

          institute: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
        }).typeError("هر آیتم تحصیلات باید یک آبجکت باشد"),
      )
      .typeError("education باید یک آرایه باشد")
      .min(1, "حداقل یک مدرک تحصیلی باید وارد شود"),

    // ─────────────── WORK EXPERIENCE (object) ───────────────
    workExperience: Yup.object({
      lastSalary: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      insuranceDuration: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      usedUnemploymentInsurance: Yup.string()
        .typeError("نوع داده نامعتبر است (string)")
        .required("الزامی است"),

      works: Yup.array()
        .of(
          Yup.object({
            organization: Yup.string()
              .typeError("نوع داده نامعتبر است (string)")
              .required("الزامی است"),

            role: Yup.string()
              .typeError("نوع داده نامعتبر است (string)")
              .required("الزامی است"),

            duration: Yup.string()
              .typeError("نوع داده نامعتبر است (string)")
              .required("الزامی است"),

            terminationReason: Yup.string()
              .typeError("نوع داده نامعتبر است (string)")
              .required("الزامی است"),
          }).typeError("هر آیتم سابقه کاری باید یک آبجکت باشد"),
        )
        .typeError("works باید یک آرایه باشد")
        .min(1, "حداقل یک سابقه کاری باید وارد شود"),
    })
      .typeError("workExperience باید یک آبجکت باشد")
      .required("اطلاعات سوابق کاری الزامی است"),

    // ─────────────── SKILLS (array<object>) ───────────────
    skills: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
          level: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
        }),
      )
      .typeError("skills باید یک آرایه باشد")
      .min(1, "حداقل یک مهارت باید وارد شود"),

    // ─────────────── SOFTWARE (array<object>) ───────────────
    software: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
          level: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
        }),
      )
      .typeError("software باید یک آرایه باشد")
      .min(1, "حداقل یک نرم‌افزار باید وارد شود"),

    // ─────────────── LANGUAGES (array<object>) ───────────────
    languages: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
          level: Yup.string()
            .typeError("نوع داده نامعتبر است (string)")
            .required("الزامی است"),
        }),
      )
      .typeError("languages باید یک آرایه باشد")
      .min(1, "حداقل یک زبان باید وارد شود"),

    // ─────────────── DESCRIPTION ───────────────
    description: Yup.string()
      .typeError("نوع داده نامعتبر است (string)")
      .max(1000, "توضیحات نباید بیش از 1000 کاراکتر باشد")
      .required("الزامی است"),

    // ─────────────── EXPECTED SALARY ───────────────
    expectedSalary: Yup.string()
      .typeError("نوع داده نامعتبر است (string)")
      .required("الزامی است"),
  }),
  EN: Yup.object({
    // ──────────────── BASIC FIELDS ────────────────
    career_id: Yup.string()
      .typeError("Invalid data type (expected string)")
      .required("Career ID is required"),

    // ───────────── PERSONAL INFO (object) ─────────────
    personalInfo: Yup.object({
      fullName: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Full name is required"),

      nationalId: Yup.string()
        .typeError("Invalid data type (expected string)")
        .matches(/^\d{10}$/, "National ID must be 10 digits")
        .required("National ID is required"),

      birthDate: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Birth date is required"),

      birthPlace: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Birth place is required"),

      issuePlace: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Issue place is required"),

      maritalStatus: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Marital status is required"),

      militaryStatus: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Military status is required"),

      fatherName: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Father's name is required"),

      fatherJob: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Father's occupation is required"),

      insuranceHistory: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Insurance history is required"),

      phoneNumber: Yup.string()
        .matches(/^09\d{9}$/, "Invalid phone number format")
        .required("Phone number is required"),
    })
      .typeError("personalInfo must be an object")
      .required("Personal information is required"),

    // ─────────────── EDUCATION (array<object>) ───────────────
    education: Yup.array()
      .of(
        Yup.object({
          fieldOfStudy: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Field of study is required"),

          level: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Education level is required"),

          gpa: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("GPA is required"),

          institute: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Institute name is required"),
        }).typeError("Each education item must be an object"),
      )
      .typeError("Education must be an array")
      .min(1, "At least one education record is required"),

    // ─────────────── WORK EXPERIENCE (object) ───────────────
    workExperience: Yup.object({
      lastSalary: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Last salary is required"),

      insuranceDuration: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("Insurance duration is required"),

      usedUnemploymentInsurance: Yup.string()
        .typeError("Invalid data type (expected string)")
        .required("This field is required"),

      works: Yup.array()
        .of(
          Yup.object({
            organization: Yup.string()
              .typeError("Invalid data type (expected string)")
              .required("Organization name is required"),

            role: Yup.string()
              .typeError("Invalid data type (expected string)")
              .required("Role is required"),

            duration: Yup.string()
              .typeError("Invalid data type (expected string)")
              .required("Duration is required"),

            terminationReason: Yup.string()
              .typeError("Invalid data type (expected string)")
              .required("Termination reason is required"),
          }).typeError("Each work experience item must be an object"),
        )
        .typeError("Works must be an array")
        .min(1, "At least one work experience record is required"),
    })
      .typeError("workExperience must be an object")
      .required("Work experience is required"),

    // ─────────────── SKILLS (array<object>) ───────────────
    skills: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Skill name is required"),

          level: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Skill level is required"),
        }),
      )
      .typeError("Skills must be an array")
      .min(1, "At least one skill is required"),

    // ─────────────── SOFTWARE (array<object>) ───────────────
    software: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Software name is required"),

          level: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Software proficiency level is required"),
        }),
      )
      .typeError("Software must be an array")
      .min(1, "At least one software skill is required"),

    // ─────────────── LANGUAGES (array<object>) ───────────────
    languages: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Language name is required"),

          level: Yup.string()
            .typeError("Invalid data type (expected string)")
            .required("Language proficiency level is required"),
        }),
      )
      .typeError("Languages must be an array")
      .min(1, "At least one language is required"),

    // ─────────────── DESCRIPTION ───────────────
    description: Yup.string()
      .typeError("Invalid data type (expected string)")
      .max(1000, "Description cannot exceed 1000 characters")
      .required("Description is required"),

    // ─────────────── EXPECTED SALARY ───────────────
    expectedSalary: Yup.string()
      .typeError("Invalid data type (expected string)")
      .required("Expected salary is required"),
  }),
};

export const ContactUsSchema: IValidation = {
  EN: Yup.object({
    firstName: Yup.string().required("enter your first name"),
    lastName: Yup.string().required("enter your last name"),

    email: Yup.string()
      .email("Invalid email address")
      .required("enter your email"),

    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("enter your phone number"),

    message: Yup.string().required("enter your message"),

    address: Yup.string()
      .required("enter your address")
      .max(100, "Maximum 100 characters"),
  }),

  FA: Yup.object({
    firstName: Yup.string().required("نام را وارد کنید"),
    lastName: Yup.string().required("نام خانوادگی را وارد کنید"),

    email: Yup.string()
      .email("ایمیل وارد شده معتبر نیست")
      .required("ایمیل را وارد کنید"),

    phone: Yup.string()
      .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
      .required("شماره موبایل را وارد کنید"),

    message: Yup.string().required("پیام را وارد کنید"),

    address: Yup.string()
      .required("آدرس را وارد کنید")
      .max(100, "حداکثر 100 کاراکتر"),
  }),
};
