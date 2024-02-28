const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];

  function generateTable() {
    const tbody = document.querySelector('#employeeTable tbody');

    employees.forEach(employee => {
      const row = document.createElement('tr');

      Object.values(employee).forEach(value => {
        if (typeof value === 'object') {

          Object.values(value).forEach(innerValue => {
            const cell = document.createElement('td');
            cell.textContent = innerValue;
            row.appendChild(cell);
          });
        } else if (Array.isArray(value)) {
          
          const cell = document.createElement('td');
          cell.textContent = value.join(', ');
          row.appendChild(cell);
        } else {
        
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        }
      });

      tbody.appendChild(row);
    });
  }

  generateTable();