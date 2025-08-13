import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Accordpage() {
  const faq =[
    {
      "question":"texxt",
      "answer":"answer"
    }
  ]
  return (
    <div className="flex justify-center items-center h-full">
      <main className="w-[500px] p-4">
<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
  </AccordionItem>
</Accordion>
</main>
</div>

  )
}

export default Accordpage