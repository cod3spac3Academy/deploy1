import Item from './Item';

const TasksList = props => {
  return (
    <ul className="task-list">
      {Object.keys(props.items).map((key, index) => (
        <Item
          key={key}
          id={key}
          title={props.items[key].title}
          onDelete={props.onDeleteItem}
          onEdit={props.onEditItem}
          even={(index % 2) === 0}
        />
      ))}
    </ul>
  );
};

export default TasksList;
