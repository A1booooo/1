import { Box, Grid, Typography, Paper } from '@mui/material';
import ComponentPalette from '../components/editor/ComponentPalette';
import Canvas from '../components/editor/Canvas';
import PropertyPanel from '../components/editor/PropertyPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Editor() {
  return (
    <Box sx={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      <Typography variant="h4" gutterBottom sx={{ p: 3, pb: 0 }}>
        可视化编辑器
      </Typography>

      <DndProvider backend={HTML5Backend}>
        <Grid container height="calc(100% - 64px)" spacing={0}>
          {/* 左侧组件库 */}
          <Grid item xs={2} sx={{ height: '100%', overflow: 'auto' }}>
            <ComponentPalette />
          </Grid>

          {/* 中间画布 */}
          <Grid item xs={8} sx={{ height: '100%', overflow: 'auto' }}>
            <Canvas />
          </Grid>

          {/* 右侧属性面板 */}
          <Grid item xs={2} sx={{ height: '100%', overflow: 'auto' }}>
            <PropertyPanel />
          </Grid>
        </Grid>
      </DndProvider>
    </Box>
  );
}

export default Editor;