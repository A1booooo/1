import { useDrag } from 'react-dnd';
import { Box, Paper, Typography, Grid } from '@mui/material';
import ButtonIcon from '@mui/icons-material/Button';
import InputIcon from '@mui/icons-material/Input';
import TextIcon from '@mui/icons-material/TextFields';
// 新增图标导入
import CheckboxIcon from '@mui/icons-material/CheckBox';
import RadioIcon from '@mui/icons-material/RadioButtonChecked';
import SelectIcon from '@mui/icons-material/ArrowDropDown';
import CardIcon from '@mui/icons-material/CardMembership';
import TextareaIcon from '@mui/icons-material/TextFields';
import SwitchIcon from '@mui/icons-material/Switch';
import SliderIcon from '@mui/icons-material/Slider';
import DatePickerIcon from '@mui/icons-material/DatePicker';
import TableIcon from '@mui/icons-material/Table';
import TabsIcon from '@mui/icons-material/Tabs';
import ModalIcon from '@mui/icons-material/Modal';
import UploadIcon from '@mui/icons-material/Upload';

// 可拖拽组件列表 - 添加新组件
const COMPONENTS = [
  { type: 'button', name: '按钮', icon: <ButtonIcon /> },
  { type: 'input', name: '输入框', icon: <InputIcon /> },
  { type: 'text', name: '文本', icon: <TextIcon /> },
  { type: 'checkbox', name: '复选框', icon: <CheckboxIcon /> },
  { type: 'radio', name: '单选按钮', icon: <RadioIcon /> },
  { type: 'select', name: '下拉菜单', icon: <SelectIcon /> },
  { type: 'card', name: '卡片', icon: <CardIcon /> },
  // 新增组件
  { type: 'textarea', name: '文本域', icon: <TextareaIcon /> },
  { type: 'switch', name: '开关', icon: <SwitchIcon /> },
  { type: 'slider', name: '滑块', icon: <SliderIcon /> },
  { type: 'datepicker', name: '日期选择器', icon: <DatePickerIcon /> },
  { type: 'table', name: '表格', icon: <TableIcon /> },
  { type: 'tabs', name: '标签页', icon: <TabsIcon /> },
  { type: 'modal', name: '弹窗', icon: <ModalIcon /> },
  { type: 'upload', name: '上传', icon: <UploadIcon /> }
];

const ComponentItem = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type: component.type },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  }));

  return (
    <Paper
      ref={drag}
      sx={{
        p: 2,
        textAlign: 'center',
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        transition: 'opacity 0.2s'
      }}
    >
      {component.icon}
      <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
        {component.name}
      </Typography>
    </Paper>
  );
};

export default function ComponentPalette() {
  return (
    <Box sx={{ p: 2, borderRight: 1, borderColor: 'divider', height: '100%' }}>
      <Typography variant="h6" gutterBottom>组件库</Typography>
      <Grid container spacing={2}>
        {COMPONENTS.map(component => (
          <Grid item xs={6} key={component.type}>
            <ComponentItem component={component} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}