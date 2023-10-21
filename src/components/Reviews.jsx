import React from "react";
import { Link } from "react-scroll";
import { AiFillStar } from "react-icons/ai";
import GoogleReviewcard from "./GoogleReviewCard";

function Reviews() {
  return (
    <div
      name="reviews"
      className="w-full max-h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="md:mt-24 flex flex-col gap-5 md:px-32 px-5 mt-24">
        <div className=" h-20 rounded-md shadow-md bg-zinc-100 w-full flex justify-between p-5">
          <div className="flex flex-col">
            <p className="text-cyan-500">Google Rating</p>
            <p className="text-black text-[10px] ml-1">12 Ratings</p>
          </div>

          <Link
            to="contact"
            smooth
            duration={500}
            className="text-xs group text-white px-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Write Review
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full gap-5">
          <GoogleReviewcard
            name={"Annay Lopes"}
            date={"a month ago"}
            review={
              "I had the privilege of being under the care of Dr. Sabari for my gynecological needs, and I can't express how grateful I am for the exceptional care I received. She is not only a highly skilled professional but also an incredibly compassionate and empathetic person. Her ability to listen attentively and address all my concerns with patience and understanding made the entire experience so much more comfortable."
            }
          />
          <GoogleReviewcard
            name={"Jessica Meekel"}
            date={"2 weeks ago"}
            review={
              "Thank you Dr Sabari Dey for putting my mind at ease today. I am visiting Dubai on holiday from the UK and I thought my waters had broken. I was seen quickly by Dr Sabari Day and scans/tests were undertaken in a timely manner! I can now enjoy the rest of my holiday and I feel so assured that she is only around the corner in the very clean and professional Gargash Hospital. Thank you so much!"
            }
          />

          <GoogleReviewcard
            name={"Priyanka Singhal"}
            date={"2 months ago"}
            review={
              "I recently had the pleasure of visiting Dr. Sabari Dey, a gynecologist at Gargash Hospital , I cannot speak highly enough of my experience. The staff were professional and made me feel comfortable. Dr. Sabari herself was exceptional and she immediately put me at ease. She took the time to listen to my concerns and thoroughly explained me about the process of treatment . Her wealth of knowledge and expertise were evident throughout the appointment, and I felt reassured knowing I was in capable hands. She made the entire process as stress-free as possible. It was clear that she genuinely cares about her patients' well-being and aims to make their experience as comfortable as possible. She also educated me about the lifestyle choices that would benefit my overall health. Her level of patient care and dedication to her profession truly sets her apart. Overall, I highly recommend Dr. Sabari Dey ."
            }
          />
          <GoogleReviewcard
            name={"Rachana Ramanan"}
            date={"a month ago"}
            review={
              "God blessed us with a beautiful baby girl last week and I want to express my genuine gratitude to Dr. Sabari Dey, who guided us through the entire journey. Dr. Sabari came out as someone who was very approachable from day one and we never had hesitation to ask her questions, no matter how irrelevant or stupid that might sound. She always avoided medicines or procedures where it was not needed. And where it was required, she patiently gave detailed explanation to make us aware on why it was required. Besides her knowledge and experience, her positive and cheerful behavior made us more comfortable and confident. I strongly recommend Dr. Sabari Dey to all the couples out there. You will not regret your decision."
            }
          />
          <GoogleReviewcard
            name={"Reena Pinto"}
            date={"2 months ago"}
            review={
              "Highly Recommended and Caring Doctor I had the privilege of consulting Dr. Sabari Dey during a challenging time in my life, and I must say she is an exceptional doctor who truly cares about her patients. Her expertise and compassionate approach have made a significant impact on my well-being. From the moment I met Dr. Sabari, I felt at ease. She has consistently shown a genuine interest in my health and well-being, always going above and beyond to provide the best possible care. During my pregnancy, when I unfortunately contracted COVID-19, she guided me with great expertise and reassurance, helping me navigate through those difficult days. One of the things I admire most about Dr. Sabari is her dedication to her patients. She listens attentively to any concerns and takes the time to explain medical conditions and treatment options thoroughly. Her advice has always been spot-on, and I trust her judgment implicitly. Having Dr. Sabari as my go-to person for medical advice has been a true blessing. She is not only a knowledgeable and skilled doctor but also an empathetic and caring individual. I can always rely on her for her support and guidance. I wholeheartedly recommend Dr. Sabari to anyone seeking a doctor who truly puts their patients' well-being first. Her professionalism, kindness, and genuine concern for her patients make her stand out as an outstanding healthcare professional. Thank you, Dr. Sabari for being an incredible doctor and a friend."
            }
          />
          <GoogleReviewcard
            name={"Sarah Karram"}
            date={"a month ago"}
            review={
              "Dr. Sabari is one of the best doctors I’ve seen so far without exaggeration. She’s knows what she’s doing and she calms you down very well. She detected something that I didn’t even doubt I may have. She even was responding to me concerns when she was on leave god bless her and her staff."
            }
          />
          <GoogleReviewcard
            name={"Riya Bose"}
            date={"a month ago"}
            review={
              "Dr. Sabari is not only a phenomenal doctor with her knowledge and skills but also an amazing support to her patients. She has been an immense emotional support through my treatment and I highly recommend her."
            }
          />
          <GoogleReviewcard
            name={"Alma Banu"}
            date={"a month ago"}
            review={
              "On this 22nd day of July 2023, i underwent a procedure at Gargash Hospital under gync Dr. Sabari Dey’s supervision. I am so grateful to Dr Sabari Dey, anaesthetist Dr. Ruchi Shola and nurse in charge Samar Shawky for taking such amazing care of me.  Dr. Sabari Dey is very empathetic to patient pain and needs. She is definitely doctor of choice. I cannot put in words the amount of care and effort Dr. Sabari Dey has put in treating me. Thank you Doctor. May almighty always keep you in his protecting grace.  The post operative care at Gargash Hospital is excellent. The nurse station is also very responsive. The hospital is very clean. The food served to the patient is also very healthy and tasty. Thank you Dr. Sabari Dey and Gargash Hospital for taking care of me.  My previous review about 5 months ago:  Recently, I visited Dr. Sabari and I was extremely happy and satisfied with the treatment. Dr. Sabari is very warm and friendly in her approach. She has the patience to answer all the queries with smile and composure. Thank you Dr. Sabari you are definitely my doctor of choice!"
            }
          />
          <GoogleReviewcard
            name={"Kajari Das"}
            date={"a month ago"}
            review={
              "Recently I have visited Gargash Hospital and met Dr Sabari Dey , gynaecologist for gynaecological issues as I am having irregular periods and a very complex situation .Initially she started by asking questions followed by an ultrasound where she detected few things and further made me undergo few blood tests as well. She examined me too and seemed very knowledgable not only about gynaec related issues but otherwise also and immediately referred me to the radiologist Dr. Sarmistha Gupta whom I have met yesterday and underwent an ultrasound of the abdomen . By Gods grace both these doctors have saved my life by detecting the issue at the right time .I definitely have to undergo a surgery to rectify the defect that has been diagnosed , but I am grateful and thankful to Dr Sabari Dey & Dr Sarmistha Gupta for their promptness and personal care in investigating me . A patient is half recovered already if the doctors behave well with you and make you feel that all will be ok . I highly recommend everyone to meet for any gynaecological issues Dr Sabari Dey & and for any type of ultrasound Dr Sharmishta Gupta . Overall very happy and would love to continue to follow up with them from time to time ."
            }
          />
          <GoogleReviewcard
            name={"Asha manoharan"}
            date={"2 months ago"}
            review={
              "I recently had the privilege of being under the care of Dr. Sabari Dey a highly skilled ObGyn - Laparoscopic Surgeon, and I cannot praise her enough for her professionalism and expertise. From the moment I walked into her office, I felt at ease by her warm and caring demeanor. Dr. Dey took the time to listen to my concerns, thoroughly explaining the laparoscopic procedure she recommended and the potential benefits and risks involved. She displayed exceptional communication skills, breaking down complex medical terms into easily understandable language, which helped alleviate any anxiety I had about the surgery. Throughout my journey with Dr. Dey, her professionalism and competence shone through. Not only is she board-certified in Obstetrics and Gynecology, but she also has extensive training and experience in laparoscopic surgery, which was evident in the way she handled my case with confidence and precision. On the day of the procedure, her surgical team was incredibly efficient, and I felt reassured by their seamless coordination. Dr. Dey and her team made me feel safe and cared for, which significantly eased my nerves before going into surgery. Post-surgery, Dr.Dey provided detailed instructions for my recovery, and she personally followed up with me to ensure that everything was progressing well. She was always available to answer any questions or concerns I had during the recovery process, showing genuine concern for my well-being. Dr.Dey's dedication to continuing education and staying updated with the latest advancements in laparoscopic techniques is commendable. It's clear that she is committed to providing the best possible care to her patients by staying at the forefront of her field. In conclusion, I can confidently say that Dr.Dey  is an outstanding ObGyn - Laparoscopic Surgeon with impeccable professionalism. Her expertise, communication skills, and compassionate approach make her an exceptional choice for anyone seeking top-notch gynecological care. I am grateful for her exceptional care and wouldn't hesitate to recommend her to anyone in need of her services."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
