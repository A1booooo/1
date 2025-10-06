import { Box, Typography, TextField, Paper } from '@mui/material';
import { useEditorStore } from '../../store/editorStore';
import { useEffect, useState } from 'react';

export default function PropertyPanel() {
  const selectedComponent = useEditorStore(state => state.getSelectedComponent());
  const updateComponentProps = useEditorStore(state => state.updateComponentProps);
  const [props, setProps] = useState({});

  // 当选中组件变化时更新表单
  useEffect(() => {
    if (selectedComponent) {
      setProps(selectedComponent.props);
    } else {
      setProps({});
    }
  }, [selectedComponent]);

  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setProps(prev => ({ ...prev, [name]: value }));
    if (selectedComponent) {
      updateComponentProps(selectedComponent.id, { [name]: value });
    }
  };

  if (!selectedComponent) {
    return (
      <Box sx={{ p: 2, borderLeft: 1, borderColor: 'divider', height: '100%' }}>
        <Typography variant="h6" gutterBottom>属性面板</Typography>
        <Paper sx={{ p: 3, textAlign: 'center', color: '#666' }}>
          未选择组件
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, borderLeft: 1, borderColor: 'divider', height: '100%' }}>
      <Typography variant="h6" gutterBottom>属性面板</Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        组件类型: {selectedComponent.type}
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="显示文本"
        name="label"
        value={props.label || ''}
        onChange={handlePropChange}
      />

      {/* 可以根据组件类型添加更多属性编辑项 */}
    </Box>
  );
}