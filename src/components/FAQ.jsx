import React from "react";

const data = [
  {
    id: "1",
    title: "Q. How Can I Invest in Fibomining ?",
    desc: "To invest and start earning, you have to open an account by filling out the sign up form. Once you're done registering, you should proceed to deposit into your account and invest.",
  },
  {
    id: "2",
    title: "Q. Is registration available to all countries ?",
    desc: "Yes, we do not restrict users to the platform based on their locations. The platform is available and accessible from any region and we work with clients and users from around the world.",
  },
  {
    id: "3",
    title: "Q. What e-currency do you accept ?",
    desc: "Currently, we accept only Bitcoin.",
  },
  {
    id: "4",
    title: "Q. How does your affiliate program work ?",
    desc: "By participating in our affiliate and referral program, users get to earn up to 10% direct referral commission from deposits of the users they have referred. The referral commission would be applied to users account. After the user whom you have referred makes a deposit, the referral commission would be added to your account immediately the deposit has been confirmed. Please note, to keep the community growing, it is important and compulsory that users refer a minimum of two investors using their affiliate link.",
  },
  {
    id: "5",
    title: "Q. Can I reinvest from my Fibomining account balance ?",
    desc: "Yes, you can reinvest from your Fibomining account balance, only after you have made a deposit and start earning on the platform.",
  },
];

const FAqQ = () => {
  return (
    <div
      id="faq"
      className="w-full flex flex-col  px-[20px] md:px-[100px] items-center justify-center gap-10 lg:px-[400px] pt-30 lg:pt-[100px]"
    >
      <div className="flex flex-col text-center gap-5">
        <p className="text-[#307ea1] font-normal  text-2xl ">FAQS</p>
        <h1 className="font-bold text-[30px]">Frequently Asked Questions</h1>
        <p className="text-[22px]">
          Frequently asked questions (FAQ) or Questions and Answers (Q&A), are
          listed questions and answers, all supposed to be commonly asked in
          some context
        </p>
      </div>
      <div className="text-[white] flex flex-col gap-5 ">
        {data.map((d) => (
          <div key={d.id} className="bg-[#12142c]">
            <p className="bg-[#1a1c34] p-4 text-[20px] font-bold">{d.title}</p>
            <p className="p-4 text-[20px] leading-normal">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAqQ;
