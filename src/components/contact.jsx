

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [formError, setFormError] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = { name: '', email: '', message: '' };

//     if (!formData.name) errors.name = 'Name is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.message) errors.message = 'Message is required';

//     setFormError(errors);

//     return Object.values(errors).every((error) => error === '');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       emailjs
//         .send(
//           "service_71n7p1f",    // your service ID
//           "template_fexaucs",   // your template ID
//           formData,
//           "46QbDP4d8fZhoY_Tq"   // your user ID
//         )
//         .then(
//           (result) => {
//             alert('Message sent successfully!');
//             setFormData({ name: '', email: '', message: '' });
//           },
//           (error) => {
//             alert('An error occurred, please try again.');
//             console.log(error.text);
//           }
//         );
//     }
//   };
// //bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900
//   return (
//     <section id="contact" className="py-20 px-6  min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
//       <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16 text-center space-y-10">
//         <div className="text-center">
//           <h3 className="text-5xl font-bold text-white mb-4">Get In Touch</h3>
//           <p className="text-gray-200 text-lg">Let's build something great together!</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Name */}
//           <div className="flex flex-col">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className={`p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition ${
//                 formError.name ? 'border-2 border-red-500' : ''
//               }`}
//             />
//             {formError.name && <span className="text-red-400 text-sm mt-1">{formError.name}</span>}
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className={`p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition ${
//                 formError.email ? 'border-2 border-red-500' : ''
//               }`}
//             />
//             {formError.email && <span className="text-red-400 text-sm mt-1">{formError.email}</span>}
//           </div>

//           {/* Message */}
//           <div className="flex flex-col">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               className={`p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition resize-none ${
//                 formError.message ? 'border-2 border-red-500' : ''
//               }`}
//               rows="5"
//             ></textarea>
//             {formError.message && <span className="text-red-400 text-sm mt-1">{formError.message}</span>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="cursor-pointer w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition rounded-xl text-white text-xl font-semibold shadow-lg hover:shadow-2xl"
//           >
//             Send Message 🚀
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaUser, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (formError[name]) {
      setFormError({
        ...formError,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const errors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject?.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormError(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ success: false, message: '' });
      
      emailjs
        .send(
          "service_71n7p1f",
          "template_fexaucs",
          formData,
          "46QbDP4d8fZhoY_Tq"
        )
        .then(
          (result) => {
            setIsSubmitting(false);
            setSubmitStatus({ 
              success: true, 
              message: 'Message sent successfully! I\'ll get back to you soon.' 
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
          },
          (error) => {
            setIsSubmitting(false);
            setSubmitStatus({ 
              success: false, 
              message: 'Failed to send message. Please try again or contact me directly via email.' 
            });
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-indigo-950 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 text-white relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-500"></span>
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-md border border-gray-700 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                    <FaMapMarkerAlt className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400 mt-1">Ghaziabad, Uttar Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                    <FaEnvelope className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-gray-400 mt-1 hover:text-indigo-400 transition-colors">
                      abhishekagrawal1604@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gray-900 rounded-lg mr-4 border border-indigo-500">
                    <FaPhone className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400 mt-1">+91 8604050163</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/abhishek-agrawal-59b749274/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
                  >
                    <FaLinkedin className="text-gray-400 hover:text-indigo-400" />
                  </a>
                  <a 
                     href="https://github.com/abhishekv18"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
                  >
                    <FaGithub className="text-gray-400 hover:text-indigo-400" />
                  </a>
                  <a 
                   href="https://x.com/AgrawalAg11228"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
                  >
                    <FaTwitter className="text-gray-400 hover:text-indigo-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-md border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              {submitStatus.message ? (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-900 bg-opacity-20 border border-green-700' : 'bg-red-900 bg-opacity-20 border border-red-700'}`}>
                  <p className={`${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                    {submitStatus.message}
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-300 mb-2 ml-1">Name</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <FaUser />
                      </div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full p-3 pl-10 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border ${
                          formError.name ? 'border-red-500' : 'border-gray-700'
                        }`}
                      />
                    </div>
                    {formError.name && <span className="text-red-400 text-sm mt-1 ml-1">{formError.name}</span>}
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-300 mb-2 ml-1">Email</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <FaEnvelope />
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className={`w-full p-3 pl-10 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border ${
                          formError.email ? 'border-red-500' : 'border-gray-700'
                        }`}
                      />
                    </div>
                    {formError.email && <span className="text-red-400 text-sm mt-1 ml-1">{formError.email}</span>}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-gray-300 mb-2 ml-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject || ''}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={`w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border ${
                      formError.subject ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {formError.subject && <span className="text-red-400 text-sm mt-1 ml-1">{formError.subject}</span>}
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-300 mb-2 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className={`w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none border ${
                      formError.message ? 'border-red-500' : 'border-gray-700'
                    }`}
                  ></textarea>
                  {formError.message && <span className="text-red-400 text-sm mt-1 ml-1">{formError.message}</span>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-medium rounded-md transition-colors duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <FaPaperPlane className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;