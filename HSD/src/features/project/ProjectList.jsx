import { useEffect, useState } from 'react';
import { listProjects, saveProject } from './ProjectService';
import { Button, List, ListItem, ListItemText } from '@mui/material';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const refreshProjects = async () => {
    const data = await listProjects();
    setProjects(data);
  };

  const handleCreateProject = async () => {
    if (!newProjectName) return;
    await saveProject(newProjectName);
    setNewProjectName('');
    refreshProjects();
  };

  useEffect(() => {
    refreshProjects();
  }, []);

  return (
    <div>
      <h2>项目管理</h2>
      <div>
        <input 
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="新项目名称"
        />
        <Button onClick={handleCreateProject}>创建项目</Button>
      </div>
      <List>
        {projects.map(project => (
          <ListItem key={project.id}>
            <ListItemText 
              primary={project.name} 
              secondary={`最后更新: ${project.updatedAt}`} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}