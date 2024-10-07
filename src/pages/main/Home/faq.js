import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Industry 4.0?",
      answer:
        "Industry 4.0 refers to the fourth industrial revolution, characterized by the integration of advanced technologies into manufacturing and industrial processes. It is a club of different technologies. It emphasizes automation, data exchange, and smart manufacturing. Industry 4.0 is a process to use these technologies to make manufacturing and industrial processes more efficient, smarter and more data driven.",
    },
    {
      question: "What are the key Technologies of Industry 4.0?",
      answer: (
        <>
          Key Technologies of Industry 4.0 are:
          <br />
          1. Industrial Internet of Things – Connecting machines to the internet
          for real-time data collection and analytics.
          <br />
          2. Big Data and Analytics – Using vast amounts of data for operational
          insights and informed decision-making.
          <br />
          3. Cyber Physical Systems – Merging physical systems with cyber
          systems by using computer-based algorithms to control and monitor
          them.
          <br />
          4. Advanced Robotics – Smart robots/cobots that collaborate with
          humans and machines to increase system efficiency.
          <br />
          5. Cloud Computing – Data storage solutions to improve collaboration
          and data accessibility.
          <br />
          6. Machine Learning and Artificial Intelligence – Implementing
          algorithms to enhance automation, predictive maintenance, and quality
          control.
          <br />
          7. Additive Manufacturing – 3D printing technologies for more
          efficient, cost-effective production and customization.
        </>
      ),
    },
    {
      question: "What is IIOT?",
      answer:
        "IIoT, or the Industrial Internet of Things, refers to the integration of Internet of Things (IoT) technology within industrial settings. It focuses on connecting industrial machines, sensors, and devices to the internet to gather and analyze data for improved operations and decision-making...",
    },
    {
      question:
        "How difficult is it to implement Industry 4.0 in any industry?",
      answer: (
        <>
          Industry 4.0 can be implemented phase wise if the industry is big and
          large number of machines are there. Some of the challenges and there
          solutions are:
          <br />
          <br />
          <b>
            {" "}
            1. Legacy Systems/ Machine: If an industry is using legacy machines
            then it can become a challenge to make the machines compatible with
            Industry 4.0 technologies.{" "}
          </b>
          <br />
          Solution - Smart Sensors, Controllers or Gateways can be integrated
          with the machine to fetch data from the machine and use it in Industry
          4.0 Technologies. Again, it depends on the type of machines and its
          status for these kind of implementations.
          <br />
          <b>
            2. Cost: Initial Cost of Integrating Industry 4.0 technologies in
            big industries can be high and it can work as a resistance.{" "}
          </b>
          <br />
          Solution: Phase-wise implementation can be planned in these kinds of
          industries. Industrial automation and remote monitoring can be
          implemented in the first phase, while IIoT and data analytics can be
          implemented in the next phase, and so on. The plant head can also
          decide, after evaluating the ROI of the first phase, whether to move
          to phase two or not. In addition, it is not necessary to implement all
          the technologies of industry 4.0, it can vary depending on the type of
          industry.
        </>
      ),
    },
    {
      question: "Why is it beneficial for industries to move to Industry 4.0?",
      answer: (
        <>
          Moving to Industry 4.0 offers numerous benefits, such as:
          <br />
          1. Increased machine/plant efficiency.
          <br />
          2. Greater flexibility.
          <br />
          3. Improved quality.
          <br />
          4. Data-driven decision-making.
          <br />
          5. Cost reduction.
          <br />
          6. Remote supervision capabilities.
          <br />
          7. A competitive edge in the market.
        </>
      ),
    },
    {
      question: "What is Machine Learning and AI?",
      answer: (
        <>
          Machine Learning (ML) is a subset of artificial intelligence (AI) that
          focuses on the development of algorithms and statistical models. ML
          systems learn from vast amount of data, identify patterns and make
          predictions or decisions based on that data.
          <br />
          <br />
          Artificial Intelligence (AI), on the other hand, is a broader concept
          that encompasses any technique that enables machines to mimic human
          intelligence. It is a process of making machine self-aware and take
          decisions based on data.
          <br />
          <br />
          In summary, while all machine learning is AI, not all AI is machine
          learning. Together, they are transforming various sectors by
          automating tasks, enhancing decision-making, and enabling new
          capabilities. Machine learning is making the machine learn the
          patterns and make predictions while AI is making machine more
          intelligent by enabling the machine to take decisions and avoid
          machine faults.
        </>
      ),
    },
    {
      question:
        "How can Opsight AI help you in your digital transformation journey?",
      answer: (
        <>
          Opsight AI can accelerate your digital transformation journey by
          providing a Plug & Play edge gateway and platform designed to be both
          affordable and efficient. With our solution, you can start collecting
          real-time machine data and gain valuable insights within just 1 day—no
          complex setup or long waiting periods.
          <br />
          <br />
          Key features include:
          <br />
          1. Easy Integration: Connect to a wide range of industrial protocols
          (OPC UA, Modbus, MQTT, Ethernet/IP, and more) with minimal effort.
          <br />
          2. Scalability: Start small and scale as your requirements
          grow—whether it’s real-time monitoring or predictive maintenance.
          <br />
          3. Affordability: Designed with cost-effectiveness in mind, allowing
          businesses of any size to begin their digital transformation without
          breaking the bank.
          <br />
          4. Quick Deployment: Set up the entire solution within a day or less,
          ensuring you hit the ground running without unnecessary delays.
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="overflow-hidden p-14 bg-white dark:bg-gray-800 mb-20">
      <div className="max-w-5xl sm:max-w-full xs:max-w-full mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl md:mb-10 sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 dark:border-gray-600"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-lg font-medium text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                >
                  {activeIndex === index ? "▼" : "►"}
                </span>
                {"  "}
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out mb-5 ${
                  activeIndex === index ? "max-h-96 md:max-h-96 xs:max-h-[800px]" : "max-h-0"
                }`}
              >
                <div className="py-2 px-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
