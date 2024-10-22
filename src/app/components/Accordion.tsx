import React, { ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode; // El tipo ReactNode permite cualquier contenido JSX dentro del componente
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <div className=" collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title md:text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  );
}

export default Accordion;