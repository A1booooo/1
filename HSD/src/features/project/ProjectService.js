import { useEditorStore } from '../../store/editorStore';

export const listProjects = async () => {
  // 模拟API调用
  return [
    { id: '1', name: '项目1', updatedAt: '2023-05-01' },
    { id: '2', name: '项目2', updatedAt: '2023-05-15' }
  ];
};

export const saveProject = (projectName) => {
  const state = useEditorStore.getState();
  const projectData = {
    name: projectName,
    components: state.components,
    createdAt: new Date().toISOString()
  };
  // 实际项目中这里应调用API保存
  console.log('项目已保存:', projectData);
  return { success: true, projectId: 'new-id' };
};

export const loadProject = (projectId) => {
  // 模拟加载项目数据
  const mockProject = {
    components: [
      // 项目组件数据
    ]
  };
  useEditorStore.setState({ components: mockProject.components });
  return mockProject;
};