function display(classname){
  document.querySelector('.total_periods').innerHTML = `Total Periods: ${total_attendance.total}`;
  document.querySelector('.periods_percentage').innerHTML = `Percentage: ${percentage}%`;
  document.querySelector('.attended_periods').innerHTML = `Periods Attended: ${total_attendance.present}`;
  document.querySelector('.absent_periods').innerHTML = `Periods Absent: ${total_attendance.absent}`;
  if (classname === 'sub_phy'){
    document.querySelector('.attended_periods_phy').innerHTML = `Periods Attended: ${phy_attendance.present}`;
    document.querySelector('.absent_periods_phy').innerHTML = `Periods Absent: ${phy_attendance.absent}`;
  }
  else if (classname === 'sub_chem'){
    document.querySelector('.attended_periods_chem').innerHTML = `Periods Attended: ${che_attendance.present}`;
    document.querySelector('.absent_periods_chem').innerHTML = `Periods Absent: ${che_attendance.absent}`;
  }
  else if(classname === 'sub_maths'){
    document.querySelector('.attended_periods_maths').innerHTML = `Periods Attended: ${mat_attendance.present}`;
    document.querySelector('.absent_periods_maths').innerHTML = `Periods Absent: ${mat_attendance.absent}`;
  }
  else if(classname === 'sub_prog'){
    document.querySelector('.attended_periods_prog').innerHTML = `Periods Attended: ${prog_attendance.present}`;
    document.querySelector('.absent_periods_prog').innerHTML = `Periods Absent: ${prog_attendance.absent}`;
  }
  else if (classname === 'lab_comm'){
    document.querySelector('.attended_periods_comm').innerHTML = `Periods Attended: ${comm_attendance.present}`;
    document.querySelector('.absent_periods_comm').innerHTML = `Periods Absent: ${comm_attendance.absent}`;
  }
  else if (classname === 'lab_elec'){
    document.querySelector('.attended_periods_elec').innerHTML = `Periods Attended: ${elec_attendance.present}`;
    document.querySelector('.absent_periods_elec').innerHTML = `Periods Absent: ${elec_attendance.absent}`;
  }
  else if(classname === 'lab_workshop'){
    document.querySelector('.attended_periods_workshop').innerHTML = `Periods Attended: ${workshop_attendance.present}`;
    document.querySelector('.absent_periods_workshop').innerHTML = `Periods Absent: ${workshop_attendance.absent}`;
  }
  else if(classname === 'extras'){
    document.querySelector('.attended_periods_extras').innerHTML = `Periods Attended: ${extras_attendance.present}`;
    document.querySelector('.absent_periods_extras').innerHTML = `Periods Absent: ${extras_attendance.absent}`;
  }
  else if(classname === 'sub_tamil'){
    document.querySelector('.attended_periods_tamil').innerHTML = `Periods Attended: ${tamil_attendance.present}`;
    document.querySelector('.absent_periods_tamil').innerHTML = `Periods Absent: ${tamil_attendance.absent}`;
  }
}

function update_attendance(classname, button){
  if (classname === 'sub_phy'){
    if (button === 'add_present'){
      phy_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      phy_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      phy_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      phy_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'sub_chem'){
    if (button === 'add_present'){
      che_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      che_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      che_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      che_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'sub_maths'){
    if (button === 'add_present'){
      mat_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      mat_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      mat_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      mat_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'sub_prog'){
    if (button === 'add_present'){
      prog_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      prog_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      prog_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      prog_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'lab_comm'){
    if (button === 'add_present'){
      comm_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      comm_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      comm_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      comm_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'lab_elec'){
    if (button === 'add_present'){
      elec_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      elec_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      elec_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      elec_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'lab_workshop'){
    if (button === 'add_present'){
      workshop_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      workshop_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      workshop_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      workshop_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'extras'){
    if (button === 'add_present'){
      extras_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      extras_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      extras_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      extras_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  else if (classname === 'sub_tamil'){
    if (button === 'add_present'){
      tamil_attendance.present++;
      total_attendance.total++;
      total_attendance.present++;
    }
    else if (button === 'add_absent'){
      tamil_attendance.absent++;
      total_attendance.total++;
      total_attendance.absent++;
    }
    else if (button === 'remove_present'){
      tamil_attendance.present--;
      total_attendance.total--;
      total_attendance.present--;
    }
    else if (button === 'remove_absent'){
      tamil_attendance.absent--;
      total_attendance.total--;
      total_attendance.absent--;
    }
  }
  
  percentage = Math.round(((total_attendance.present)/(total_attendance.total))*100) || 0;
  phy_percentage = Math.round(((phy_attendance.present)/((phy_attendance.present + phy_attendance.absent)))*100) || 0;
  che_percentage = Math.round(((che_attendance.present)/((che_attendance.present + che_attendance.absent)))*100) || 0;
  mat_percentage = Math.round(((mat_attendance.present)/((mat_attendance.present + mat_attendance.absent)))*100) || 0;
  prog_percentage = Math.round(((prog_attendance.present)/((prog_attendance.present + prog_attendance.absent)))*100) || 0;
  tamil_percentage = Math.round(((tamil_attendance.present)/((tamil_attendance.present + tamil_attendance.absent)))*100) || 0;
  comm_percentage = Math.round(((comm_attendance.present)/((comm_attendance.present + comm_attendance.absent)))*100) || 0;
  elec_percentage = Math.round(((elec_attendance.present)/((elec_attendance.present + elec_attendance.absent)))*100) || 0;
  workshop_percentage = Math.round(((workshop_attendance.present)/((workshop_attendance.present + workshop_attendance.absent)))*100) || 0;


  localStorage.setItem('total_attendance',JSON.stringify(total_attendance));
  localStorage.setItem('phy_attendance',JSON.stringify(phy_attendance));
  localStorage.setItem('mat_attendance',JSON.stringify(mat_attendance));
  localStorage.setItem('che_attendance',JSON.stringify(che_attendance));
  localStorage.setItem('prog_attendance',JSON.stringify(prog_attendance));
  localStorage.setItem('tamil_attendance',JSON.stringify(tamil_attendance));
  localStorage.setItem('comm_attendance',JSON.stringify(comm_attendance));
  localStorage.setItem('elec_attendance',JSON.stringify(elec_attendance));
  localStorage.setItem('workshop_attendance',JSON.stringify(workshop_attendance));
  localStorage.setItem('extras_attendance',JSON.stringify(extras_attendance));
  localStorage.setItem('percentage', percentage.toString());
  localStorage.setItem('phy_percentage', phy_percentage.toString());
  localStorage.setItem('che_percentage', che_percentage.toString());
  localStorage.setItem('mat_percentage', mat_percentage.toString());
  localStorage.setItem('prog_percentage', prog_percentage.toString());
  localStorage.setItem('tamil_percentage', tamil_percentage.toString());
  localStorage.setItem('comm_percentage', comm_percentage.toString());
  localStorage.setItem('elec_percentage', elec_percentage.toString());
  localStorage.setItem('workshop_percentage', workshop_percentage.toString());


  document.querySelector('.periods_percentage').innerHTML = `Percentage: ${percentage}%`;
  document.querySelector('.sub_percentage1').innerHTML = `Percentage: ${phy_percentage}%`;
  document.querySelector('.sub_percentage2').innerHTML = `Percentage: ${che_percentage}%`;
  document.querySelector('.sub_percentage3').innerHTML = `Percentage: ${mat_percentage}%`;
  document.querySelector('.sub_percentage4').innerHTML = `Percentage: ${prog_percentage}%`;
  document.querySelector('.sub_percentage5').innerHTML = `Percentage: ${tamil_percentage}%`;
  document.querySelector('.sub_percentage6').innerHTML = `Percentage: ${comm_percentage}%`;
  document.querySelector('.sub_percentage7').innerHTML = `Percentage: ${elec_percentage}%`;
  document.querySelector('.sub_percentage8').innerHTML = `Percentage: ${workshop_percentage}%`;

}
let total_attendance = JSON.parse(localStorage.getItem('total_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let phy_attendance = JSON.parse(localStorage.getItem('phy_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let mat_attendance = JSON.parse(localStorage.getItem('mat_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let che_attendance = JSON.parse(localStorage.getItem('che_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let prog_attendance = JSON.parse(localStorage.getItem('prog_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let workshop_attendance = JSON.parse(localStorage.getItem('workshop_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let elec_attendance = JSON.parse(localStorage.getItem('elec_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let comm_attendance = JSON.parse(localStorage.getItem('comm_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
};
let extras_attendance = JSON.parse(localStorage.getItem('extras_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
}; 
let tamil_attendance = JSON.parse(localStorage.getItem('tamil_attendance')) || {
  present: 0,
  absent: 0,
  total: 0
}; 

let percentage = localStorage.getItem('percentage') || 0;
let phy_percentage = localStorage.getItem('phy_percentage') || 0;
let che_percentage = localStorage.getItem('che_percentage') || 0;
let mat_percentage = localStorage.getItem('mat_percentage') || 0;
let prog_percentage = localStorage.getItem('prog_percentage') || 0;
let tamil_percentage = localStorage.getItem('tamil_percentage') || 0;
let comm_percentage = localStorage.getItem('comm_percentage') || 0;
let elec_percentage = localStorage.getItem('elec_percentage') || 0;
let workshop_percentage = localStorage.getItem('workshop_percentage') || 0;


document.querySelector('.total_periods').innerHTML = `Total Periods: ${total_attendance.total}`;
document.querySelector('.periods_percentage').innerHTML = `Percentage: ${percentage}%`;
document.querySelector('.attended_periods').innerHTML = `Periods Attended: ${total_attendance.present}`;
document.querySelector('.absent_periods').innerHTML = `Periods Absent: ${total_attendance.absent}`;
document.querySelector('.attended_periods_phy').innerHTML = `Periods Attended: ${phy_attendance.present}`;
document.querySelector('.absent_periods_phy').innerHTML = `Periods Absent: ${phy_attendance.absent}`;
document.querySelector('.attended_periods_chem').innerHTML = `Periods Attended: ${che_attendance.present}`;
document.querySelector('.absent_periods_chem').innerHTML = `Periods Absent: ${che_attendance.absent}`;
document.querySelector('.attended_periods_maths').innerHTML = `Periods Attended: ${mat_attendance.present}`;
document.querySelector('.absent_periods_maths').innerHTML = `Periods Absent: ${mat_attendance.absent}`;
document.querySelector('.attended_periods_prog').innerHTML = `Periods Attended: ${prog_attendance.present}`;
document.querySelector('.absent_periods_prog').innerHTML = `Periods Absent: ${prog_attendance.absent}`;
document.querySelector('.attended_periods_comm').innerHTML = `Periods Attended: ${comm_attendance.present}`;
document.querySelector('.absent_periods_comm').innerHTML = `Periods Absent: ${comm_attendance.absent}`;
document.querySelector('.attended_periods_elec').innerHTML = `Periods Attended: ${elec_attendance.present}`;
document.querySelector('.absent_periods_elec').innerHTML = `Periods Absent: ${elec_attendance.absent}`;
document.querySelector('.attended_periods_workshop').innerHTML = `Periods Attended: ${workshop_attendance.present}`;
document.querySelector('.absent_periods_workshop').innerHTML = `Periods Attended: ${workshop_attendance.absent}`;
document.querySelector('.attended_periods_extras').innerHTML = `Periods Attended: ${extras_attendance.present}`;
document.querySelector('.absent_periods_extras').innerHTML = `Periods Absent: ${extras_attendance.absent}`;
document.querySelector('.attended_periods_tamil').innerHTML = `Periods Attended: ${tamil_attendance.present}`;
document.querySelector('.absent_periods_tamil').innerHTML = `Periods Absent: ${tamil_attendance.absent}`;
document.querySelector('.sub_percentage1').innerHTML = `Percentage: ${phy_percentage}%`;
  document.querySelector('.sub_percentage2').innerHTML = `Percentage: ${che_percentage}%`;
  document.querySelector('.sub_percentage3').innerHTML = `Percentage: ${mat_percentage}%`;
  document.querySelector('.sub_percentage4').innerHTML = `Percentage: ${prog_percentage}%`;
  document.querySelector('.sub_percentage5').innerHTML = `Percentage: ${tamil_percentage}%`;
  document.querySelector('.sub_percentage6').innerHTML = `Percentage: ${comm_percentage}%`;
  document.querySelector('.sub_percentage7').innerHTML = `Percentage: ${elec_percentage}%`;
  document.querySelector('.sub_percentage8').innerHTML = `Percentage: ${workshop_percentage}%`;