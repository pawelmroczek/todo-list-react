import "./styles.css";

const Buttons = ({ tasks,hideDoneTask }) => {
 return tasks.length>0 &&( 
 <div className="buttonContener">
    <button className="tasks__headerButton ">{hideDoneTask ? "Pokaż" : "Ukryj"} ukończone</button>
    <button className="tasks__headerButton " disabled={tasks.every(({done})=>done)} >Ukończ wszystkie</button>
 </div>)
};

export default Buttons;
