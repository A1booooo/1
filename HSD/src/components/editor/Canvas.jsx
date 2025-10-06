import { useDrop } from 'react-dnd';
import { Box, Paper } from '@mui/material';
import { useEditorStore } from '../../store/editorStore';

// 画布上的组件渲染器
const ComponentRenderer = ({ component }) => {
  const selectComponent = useEditorStore(state => state.selectComponent);
  const selectedComponentId = useEditorStore(state => state.selectedComponentId);
  const isSelected = selectedComponentId === component.id;

  return (
    <div
      style={{
        position: 'absolute',
        left: component.position.x,
        top: component.position.y,
        ...component.style,
        border: isSelected ? '2px solid #1976d2' : '1px solid #ddd',
        padding: '8px',
        cursor: 'move',
        backgroundColor: component.style.backgroundColor
      }}
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(component.id);
      }}
    >
      {component.type === 'button' && (
        <button style={{ width: '100%', height: '100%' }}>{component.props.label}</button>
      )}
      {component.type === 'input' && (
        <input
          style={{ width: '100%', height: '100%' }}
          placeholder={component.props.label}
        />
      )}
      {component.type === 'text' && (
        <span>{component.props.label}</span>
      )}
    </div>
  );
};

export default function Canvas() {
  const components = useEditorStore(state => state.components);
  const addComponent = useEditorStore(state => state.addComponent);
  const selectComponent = useEditorStore(state => state.selectComponent);

  // 处理拖放功能
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      const canvasRect = document.getElementById('editor-canvas').getBoundingClientRect();
      if (offset && canvasRect) {
        addComponent(item.type, {
          x: offset.x - canvasRect.left,
          y: offset.y - canvasRect.top
        });
      }
    },
    collect: (monitor) => ({ isOver: monitor.isOver() })
  }));

  return (
    <Box
      id="editor-canvas"
      ref={drop}
      sx={{
        flexGrow: 1,
        p: 2,
        position: 'relative',
        backgroundColor: isOver ? '#f5f5f5' : '#fff',
        border: 1,
        borderColor: 'divider',
        minHeight: '600px',
        transition: 'background-color 0.2s'
      }}
      onClick={() => selectComponent(null)}
    >
      <Paper sx={{ p: 2, mb: 2 }}>
        画布区域 - 拖拽组件到此处
      </Paper>
      {components.map(component => (
        <ComponentRenderer key={component.id} component={component} />
      ))}
    </Box>
  );
}