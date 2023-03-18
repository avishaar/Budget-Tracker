import React from "react";
import { useContext, AppContext } from "react";

const ProgressBar = (props) => {

  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

return (

    <div class="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow={totalExpenses}
  aria-valuemin="0" aria-valuemax="100" >
    {totalExpenses}
  </div>
</div>




)

};

export default ProgressBar;