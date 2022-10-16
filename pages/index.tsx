import Layout from "../components/Layout";
import InputAmount from "../components/InputAmount";
import Calculator from "../components/Calculator";
import { useState } from "react";

const IndexPage = () => {
  const [input, setInput] = useState(50000);
  return (
    <Layout title="Predlog Ministarsta finansija za oporezivanja fizičkih lica koja rade preko interneta">
      <h1 className="bg-gray-100 p-4 mb-4 font-bold">
        Predlog Ministarsta finansija
        za oporezivanje fizičkih lica
        koja rade preko interneta
      </h1>
      <InputAmount value={input} onChange={val => setInput(val)}/>
      <section className="flex flex-wrap justify-center">
        <Calculator input={input} optionNumber={1} />
        <Calculator input={input} optionNumber={2} />
      </section>
    </Layout>
  );
};

export default IndexPage;
