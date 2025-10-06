import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useEditorStore = create((set, get) => ({
  // 画布上的组件列表
  components: [],
  // 当前选中的组件ID
  selectedComponentId: null,

  // 添加组件到画布
  // 添加组件到画布 - 根据组件类型设置不同默认属性
  addComponent: (componentType, position) => set((state) => {
    // 组件默认配置
    const componentDefaults = {
      button: {
        props: { label: `按钮-${Date.now().toString().slice(-4)}` },
        style: { width: 120, height: 40, backgroundColor: '#f0f0f0' }
      },
      input: {
        props: { placeholder: '请输入...', value: '' },
        style: { width: 200, height: 40, backgroundColor: '#ffffff' }
      },
      text: {
        props: { content: '文本内容' },
        style: { width: 'auto', height: 'auto', color: '#333333' }
      },
      // 新增组件默认配置
      checkbox: {
        props: { label: '复选框', checked: false },
        style: { width: 180, height: 40, backgroundColor: 'transparent' }
      },
      radio: {
        props: { label: '单选按钮', checked: false },
        style: { width: 180, height: 40, backgroundColor: 'transparent' }
      },
      select: {
        props: { value: '', options: [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' }] },
        style: { width: 180, height: 40, backgroundColor: '#ffffff' }
      },
      card: {
        props: { title: '卡片标题', content: '卡片内容' },
        style: { width: 280, height: 180, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }
      }
    };
  
    // 获取当前组件类型的默认配置
    const defaults = componentDefaults[componentType] || componentDefaults.button;
  
    return {
      components: [
        ...state.components,
        {
          id: uuidv4(),
          type: componentType,
          position: { x: position.x, y: position.y },
          props: defaults.props,
          style: defaults.style
        }
      ]
    };
  }),

  // 更新组件属性
  updateComponentProps: (id, props) => set((state) => ({
    components: state.components.map(component => 
      component.id === id ? { ...component, props: { ...component.props, ...props } } : component
    )
  })),

  // 选择组件
  selectComponent: (id) => set({ selectedComponentId: id }),

  // 获取当前选中组件
  getSelectedComponent: () => {
    const { components, selectedComponentId } = get();
    return components.find(c => c.id === selectedComponentId);
  }
}));