import { ErrorMessage, Field, Form, Formik } from "formik";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import emailjs from "emailjs-com";
import * as Yup from "yup";
const Message = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const HandleSubmit = (values, { resetForm }) => {
    console.log(values);
    const serviceId = "qwert123456789";
    const templateId = "qwert123456789";
    const userId = "4-Ps-AEjYIYvEXg9X"; // Get this from your EmailJS account

    emailjs
      .send(serviceId, templateId, values, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        resetForm();
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send your message.");
      });
    resetForm();
  };

  return (
    <div className="flex items-center  flex-col text-gray-800">
      <h3 className="mb-5 dark:text-darkText font-semibold">
        Send me your ideas
      </h3>
      <Formik
        validationSchema={validationSchema}
        onSubmit={HandleSubmit}
        initialValues={{ name: "", email: "", message: "" }}
      >
        {() => (
          <Form className="flex flex-col gap-4  bg-amber-50 shadow-md p-8 rounded-lg">
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute text-sm font-semibold top-0 left-6 bg-amber-50 px-1"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Your name..."
                className="border border-gray-300 rounded-md p-2 w-full mt-3"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute text-sm font-semibold top-0 left-6 bg-amber-50 px-1"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Your email..."
                className="border border-gray-300 rounded-md p-2 w-full mt-3"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="absolute text-sm font-semibold top-0 left-6 bg-amber-50 px-1"
              >
                Message
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Enter your message..."
                className=" border border-gray-300 rounded-md p-2 w-full h-32 mt-3"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-semibold rounded-md focus:outline-none focus:ring-2 hover:bg-gray-900 focus:ring-indigo-950"
            >
              <span>Submit</span>
              <MdOutlineKeyboardDoubleArrowRight size={20} />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Message;
