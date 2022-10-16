import ControlledInput from "./ControlledInput";

const InputAmount = ({value, onChange}) => {
    return (
    <section className="p-4">
        <label>Ukupni mesečni priliv (RSD):</label>
        <ControlledInput className="mx-4 border-2 text-right " value={value} onChange={onChange} />
    </section>
    );
};

export default InputAmount;