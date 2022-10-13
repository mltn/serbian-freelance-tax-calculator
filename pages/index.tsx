import Layout from "../components/Layout";
import InputAmount from "../components/InputAmount";
import Calculator from "../components/Calculator";
import { useState } from "react";

const IndexPage = () => {
  const [input, setInput] = useState(60000);
  return (
    <Layout title="Predlog Ministarsta finansija za oporezivanja fizičkih lica koja rade preko interneta">
      <h1 className="bg-red-500 p-4 mb-4 font-bold">
        Predlog Ministarsta finansija
        za oporezivanja fizičkih lica
        koja rade preko interneta
      </h1>
      <InputAmount value={input} onChange={val => setInput(val)}/>
      <Calculator input={input} />
    </Layout>
  );
};

export default IndexPage;
