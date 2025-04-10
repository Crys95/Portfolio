'use client'
import { BsFiletypePdf } from 'react-icons/bs'
import { SectionTitles } from '../section-title'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Modal } from '../modal'
import { useState } from 'react'

export const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const MockContacts = [
    {
      url: 'https://github.com/Crys95',
      icon: <TbBrandGithub />,
    },
    {
      url: 'https://www.linkedin.com/in/crystyan-gomes-dev/',
      icon: <TbBrandLinkedin />,
    },
    {
      url: 'https://api.whatsapp.com/send/?phone=+5511944478209&text=Ol%C3%A1+Crystyan%2C+tudo+certo%3F&type=phone_number&app_absent=0',
      icon: <TbBrandWhatsapp />,
    },
  ]

  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitles
          subtitle="Contato"
          titlte="Vamos Trabalhar juntos?"
          className="items-center text-center"
        />
        <Modal isOpen={isModalOpen} onCLick={() => setIsModalOpen(false)} />
        <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col">
          <div className="flex h-12 sm:w-72 justify-center items-center border-2 border-indigo-400/50 hover:bg-indigo-400 p-2 rounded cursor-default hover:shadow-button text-gray-100 transition-all">
            Entre em contato
          </div>
          <div className="text-2xl text-gray-600 flex items-center justify-center h-20 sm:gap-3 gap-6">
            {MockContacts.map((contact, index, i: any) => (
              <motion.a
                href={contact.url}
                key={`contact-${index}`}
                target="_blanck"
                className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-indigo-400/50 hover:bg-indigo-400 hover:shadow-button hover:border-2 hover:border-indigo-300"
              >
                {contact.icon}
              </motion.a>
            ))}
            <motion.a
              href="mailto:gomescrystyan@gmail.com"
              className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-indigo-400/50 hover:bg-indigo-400 hover:shadow-button hover:border-2 hover:border-indigo-300"
            >
              <MdEmail />
            </motion.a>
            <motion.a
              href="doc/Crystyan_Curriculo.docx"
              download
              target="_blanck"
              className="text-gray-100 w-12 h-12 hover:h-14 hover:w-14 flex justify-center items-center transition-all rounded-lg border-2 border-indigo-400/50 hover:bg-indigo-400 hover:shadow-button hover:border-2 hover:border-indigo-300"
            >
              <BsFiletypePdf />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
