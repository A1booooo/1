import { useEditorStore } from '../store/editorStore';

export const generateReactCode = () => {
  const components = useEditorStore.getState().components;
  
  // 生成JSX代码
  const jsxCode = components.map(comp => `
    <div style={${JSON.stringify(comp.style)}}>
      ${getComponentCode(comp)}
    </div>
  `).join('');
  
  return `import React from 'react';

function GeneratedComponent() {
  return (
    <div style={{position: 'relative', minHeight: '600px'}}>
      ${jsxCode}
    </div>
  );
}`;
};

// 组件代码生成辅助函数
const getComponentCode = (component) => {
  switch(component.type) {
    case 'button':
      return `<button style={{width: '100%', height: '100%'}}>${component.props.label}</button>`;
    case 'input':
      return `<input style={{width: '100%', height: '100%'}} placeholder="${component.props.placeholder || ''}" />`;
    case 'text':
      return `<span>${component.props.content || ''}</span>`;
    case 'checkbox':
      return `<label><input type="checkbox" ${component.props.checked ? 'checked' : ''} />${component.props.label || ''}</label>`;
    case 'radio':
      return `<label><input type="radio" ${component.props.checked ? 'checked' : ''} />${component.props.label || ''}</label>`;
    case 'select':
      return `<select style={{width: '100%', height: '100%'}}>
        ${component.props.options.map(opt => 
          `<option value="${opt.value}">${opt.label}</option>`
        ).join('')}
      </select>`;
    case 'card':
      return `<div style={{padding: '16px', border: '1px solid #ddd', borderRadius: '4px'}}>
        <h3>${component.props.title || ''}</h3>
        <p>${component.props.content || ''}</p>
      </div>`;
    default:
      return `<div>未知组件类型: ${component.type}</div>`;
  }
};