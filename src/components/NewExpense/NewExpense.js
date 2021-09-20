import React from "react"; // you don't have to write that
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm/>
    </div>
  );
};

export default NewExpense;
