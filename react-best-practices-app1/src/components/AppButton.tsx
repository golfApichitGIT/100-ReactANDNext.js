// 15 ใช้ Reast DOM Attributes Type ชอง React เช่น 
// React.ButtonHTMLAttributes <HTMLButtonElement>
type AppButtonProps = React.ButtonHTMLAttributes <HTMLButtonElement> & {
    label : string;
}

//#16 ใช้ Rest Props เพื่อนให้ Component ยืดหยุ่น
const AppButton = ({ label , onClick, ...rest } : AppButtonProps ) => {
  return (
    <button style={{color: 'blue'}} onClick={onClick} {...rest}>{label}</button>
  )
}

export default AppButton