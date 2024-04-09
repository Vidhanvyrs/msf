import React, { useState } from "react";
// import Login from "./Login";
import student from "./assets/student.png";
import parent from "./assets/parent.png";
import professional from "./assets/professional.png";
import lifelonglearner from "./assets/lifelonglearner.png";
import teacher from "./assets/teacher.png";
import other from "./assets/other.png";
import growth from "./assets/growth.png";
import world from "./assets/world.png";
import task from "./assets/task.png";
import target from "./assets/target.png";
import emoji from "./assets/emoji.png";
import calculus from "./assets/calculus.png";
import intro from "./assets/intro.png";
import basicalgebra from "./assets/basicalgebra.png";
import intermediate from "./assets/intermediatealgebra.png";
import pulley from "./assets/pulley.png";
import cheerleader from "./assets/cheerleader.png";
import ai from "./assets/ai.png";
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  //   let forfive = 4;
  const handleInputChange = (event) => {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="mt-10  overflow-y-scroll max-h-[540px]">
            <h2 className="text-4xl items-center flex justify-center font-bold font-ZillaSlab">
              Which describes you best?
            </h2>
            <label className="text-sm items-center flex justify-center font-bold font-ZillaSlab">
              This will help us personalize your experience
            </label>
            <br />
            <div className="flex items-center justify-center flex-col mt-2 font-ZillaSlab">
              <button
                value="student"
                name="step1Data"
                id="student"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black bg-white rounded-md hover:scale-105 hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={student} alt="Student" height={30} width={30} />
                <span className="px-6 font-bold">
                  Student{" "}
                  <span className="font-light">or soon to be enrolled</span>
                </span>
              </button>
              <button
                value="professional"
                name="step1Data"
                id="pro"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black bg-white hover:scale-105 rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img
                  src={professional}
                  alt="professional"
                  height={30}
                  width={30}
                />
                <span className="px-6 font-bold">
                  Professional{" "}
                  <span className="font-light">pursuing a career</span>
                </span>
              </button>
              <button
                value="parent"
                name="step2Data"
                id="parent"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={parent} alt="parent" height={30} width={30} />
                <span className="px-6 font-bold">
                  Parent{" "}
                  <span className="font-light">of a school-age child</span>
                </span>
              </button>
              <button
                value="lifelong learner"
                name="step3Data"
                id="ll"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={lifelonglearner} alt="LL" height={30} width={30} />
                <span className="px-6 font-bold">lifelong Learner</span>
              </button>
              <button
                value="teacher"
                name="step4Data"
                id="teacher"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={teacher} alt="teacher" height={30} width={30} />
                <span className="px-6 font-bold">Teacher</span>
              </button>
              <button
                value="other"
                name="step5Data"
                id="other"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={other} alt="other" height={30} width={30} />
                <span className="px-6 font-bold">Other</span>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-10  overflow-y-scroll max-h-[540px]">
            <h2 className="text-4xl items-center flex justify-center font-bold font-ZillaSlab">
              Which describes you best?
            </h2>
            <br />
            <div className="flex items-center justify-center flex-col mt-2 font-ZillaSlab">
              <button
                value="skillAdvancement"
                name="step6Data"
                id="skill"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={growth} alt="growth" height={30} width={30} />
                <span className="px-6 font-bold">
                  Learning specific skills to advance my career
                </span>
              </button>
              <button
                value="newTopics"
                name="step7Data"
                id="topics"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={world} alt="world" height={30} width={30} />
                <span className="px-6 font-bold">
                  Exploring new Topics I'm interested in
                </span>
              </button>
              <button
                value="task"
                name="step8Data"
                id="task"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={task} alt="task" height={30} width={30} />
                <span className="px-6 font-bold">
                  Refreshing my math foundations
                </span>
              </button>
              <button
                value="target"
                name="step9Data"
                id="target"
                onClick={handleInputChange}
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={target} alt="target" height={30} width={30} />
                <span className="px-6 font-bold">
                  Exercising my brain to stay sharp
                </span>
              </button>
              <button
                value="somethingelse"
                name="step10Data"
                onClick={handleInputChange}
                id="something"
                className={`px-4 py-4 w-[600px] m-1 text-black hover:scale-105 bg-white rounded-md hover:bg-gray-100 border border-gray-300 justify-start items-center flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
              >
                <img src={emoji} alt="emoji" height={30} width={30} />
                <span className="px-6 font-bold">Soemthing else</span>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mt-20">
            <h2 className="text-4xl items-center flex justify-center font-bold font-ZillaSlab">
              Which describes you best?
            </h2>
            <label className="text-sm items-center flex justify-center font-bold font-ZillaSlab">
              Choose the highest level you feel confident in. You can always
              adjust later.
            </label>
            <div className="flex items-center justify-evenly mt-10 font-ZillaSlab">
              <button
                type="button"
                value="Arithmetic"
                onClick={handleInputChange}
                name="step11Data"
                className="px-5 py-5 w-[300px] m-1 text-black bg-white rounded-md hover:scale-105 border border-gray-300 justify-center items-center flex-col flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <img src={intro} alt="arithematic" height={200} width={200} />
                <span className="px-6 font-bold">
                  Arithematic
                  <label className="text-sm items-center flex justify-center font-light font-ZillaSlab">
                    Introductory
                  </label>
                </span>
              </button>
              <button
                type="button"
                value="Algebra"
                className="px-5 py-5 w-[300px] m-1 text-black bg-white rounded-md hover:scale-105 border border-gray-300 justify-center items-center flex-col flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleInputChange}
                name="step12Data"
              >
                <img
                  src={basicalgebra}
                  alt="basicalgebra"
                  height={200}
                  width={200}
                />
                <span className="px-6 font-bold">
                  Basic Algebra
                  <label className="text-sm items-center flex justify-center font-light font-ZillaSlab">
                    Foudnation
                  </label>
                </span>
              </button>
              <button
                type="button"
                value="AlgebraII"
                className="px-5 py-5 w-[300px] h-[190px] m-1 text-black bg-white rounded-md hover:scale-105 border border-gray-300 justify-center items-center flex-col flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleInputChange}
                name="step13Data"
              >
                <img
                  src={intermediate}
                  alt="algebra"
                  height={200}
                  width={200}
                />
                <span className="px-6 font-bold">
                  Intermediate Algebra
                  <label className="text-sm items-center flex justify-center font-light font-ZillaSlab">
                    Intermediate
                  </label>
                </span>
              </button>
              <button
                type="button"
                value="Calculus"
                className="px-5 py-5 w-[300px] m-1 text-black bg-white rounded-md hover:scale-105 border border-gray-300 justify-center items-center flex-col flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleInputChange}
                name="step14Data"
              >
                <img src={calculus} alt="calculus" height={200} width={200} />
                <span className="px-6 font-bold">
                  Calculus{" "}
                  <label className="text-sm items-center flex justify-center font-light font-ZillaSlab">
                    Advanced
                  </label>
                </span>
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center justify-center h-screen">
            <div>
              <img src={pulley} alt="pulley" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-ZillaSlab">
                You're in the right place!
              </h2>
              <p className="text-lg w-30 mt-5 font-bold font-ZillaSlab">
                Brilliant gets you hands on to help improve your professional{" "}
                <br />
                skills and knowledge. You'll interact with concepts and solve{" "}
                <br />
                fun problem in math,science,and computer science
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex items-center justify-center h-screen">
            <div>
              <img src={cheerleader} alt="cheerleader" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-ZillaSlab">
                You're on your way!
              </h2>
              <span className="text-lg w-30 mt-5 font-bold font-ZillaSlab">
                ⭐⭐⭐⭐⭐
              </span>
              <p className="text-lg w-30 mt-5 font-bold font-ZillaSlab">
                "Through its engaging and well-structured courses, Brilliant has{" "}
                <br />
                taught me mathematical concepts that I previously struggled to{" "}
                <br />
                understand. I now feel confident approaching both interviews and{" "}
                <br />
                real world problem solving situations" <br />
              </p>
              <span className="text-lg w-30 mt-5 font-bold font-ZillaSlab">
                ➖ Jacob S.
              </span>
              <br />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <div>
              <img src={ai} alt="ai" />
            </div>
            <h2 className="text-3xl font-bold font-ZillaSlab">
              Finding learning path recommendations for you based on your
              response
            </h2>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold font-ZillaSlab">
              Please Signup/Login First!
            </h2>
          </div>
        );
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow">
        {currentStep === 1 && <div className="loader"></div>}
        {getStepContent(currentStep)}
      </div>
      <div className="bg-white border-t border-gray-200 p-1 flex justify-between fixed bottom-0 w-full">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-4 w-42 m-1 font-ZillaSlab font-bold text-white bg-black rounded-md hover:bg-white hover:text-black border border-gray-300 justify-start items-center flex"
          >
            Previous
          </button>
        )}

        {currentStep < 7 && (
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-4 w-42 m-1 font-ZillaSlab font-bold text-white bg-black rounded-md hover:bg-white hover:text-black border border-gray-300 justify-start items-center flex"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
