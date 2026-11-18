const QUIZZES = [];

QUIZZES.push({
  id: "retention",
  num: 1,
  title: { en: "Remember It", es: "Recuérdalo" },
  focus: { en: "Retention", es: "Retención" },
  blurb: {
    en: "Can you recall the key ideas from the training? These are the building blocks you will use on every appointment.",
    es: "¿Puedes recordar las ideas clave del entrenamiento? Son las bases que vas a usar en cada cita."
  },
  questions: [
    {
      q: { en: "How fast should you contact a new lead after they fill out a form or call?", es: "¿Qué tan rápido debes contactar a un cliente nuevo después de que llena un formulario o llama?" },
      opts: {
        en: ["Within one minute", "Within one hour", "By the end of the day", "The next business day"],
        es: ["En menos de un minuto", "En menos de una hora", "Antes de que termine el día", "El siguiente día hábil"]
      },
      a: 0,
      why: {
        en: "The training says calling within 60 seconds makes you about 391% more likely to close. Waiting more than 5 minutes cuts your chances by about 80%. About half of customers go with whoever answers first.",
        es: "El entrenamiento dice que llamar en menos de 60 segundos te da cerca de 391% más probabilidad de cerrar. Esperar más de 5 minutos baja tus probabilidades como un 80%. Más o menos la mitad de los clientes se van con quien responde primero."
      }
    },
    {
      q: { en: "Selling on Saturdays and Sundays (7 days instead of 5) adds about how much more selling time per year?", es: "Vender sábados y domingos (7 días en vez de 5) agrega más o menos cuánto tiempo de venta al año?" },
      opts: {
        en: ["About 10% more", "About 29% more (104 extra days)", "About 50% more", "It makes no difference"],
        es: ["Como 10% más", "Como 29% más (104 días extra)", "Como 50% más", "No hace ninguna diferencia"]
      },
      a: 1,
      why: {
        en: "2 extra days times 52 weeks is 104 days, about a 29% jump. Many homeowners work 9 to 5, so evenings and weekends are when they are home and ready to talk about their kitchen.",
        es: "2 días extra por 52 semanas son 104 días, como un 29% más. Muchos dueños de casa trabajan de 9 a 5, así que las tardes y los fines de semana es cuando están en casa y listos para hablar de su cocina."
      }
    },
    {
      q: { en: "Besides automatic reminders, when should you send a personal reminder before an appointment?", es: "Además de los recordatorios automáticos, ¿cuándo debes mandar un recordatorio personal antes de una cita?" },
      opts: {
        en: ["One week before only", "24 hours before, the morning of, and 1 hour before", "Only 5 minutes before", "You don't need to, automatic reminders are enough"],
        es: ["Solo una semana antes", "24 horas antes, la mañana de la cita y 1 hora antes", "Solo 5 minutos antes", "No hace falta, los automáticos son suficientes"]
      },
      a: 1,
      why: {
        en: "The night-before message should show you did some prep for them. A quick text or voice memo the morning of and one hour before keeps the appointment top of mind. More people show up, so you make more sales.",
        es: "El mensaje de la noche anterior debe mostrar que te preparaste para ellos. Un texto rápido o una nota de voz en la mañana y una hora antes mantiene la cita en su mente. Llega más gente, así que vendes más."
      }
    },
    {
      q: { en: "What does BANT stand for?", es: "¿Qué significa BANT?" },
      opts: {
        en: ["Budget, Authority, Need, Timing", "Buy, Ask, Negotiate, Thank", "Book, Arrive, Note, Train", "Benefits, Advantages, Needs, Terms"],
        es: ["Presupuesto (Budget), Autoridad, Necesidad, Tiempo (Timing)", "Comprar, Preguntar, Negociar, Agradecer", "Agendar, Llegar, Anotar, Entrenar", "Beneficios, Ventajas, Necesidades, Términos"]
      },
      a: 0,
      why: {
        en: "A customer is ready to buy when they have the budget, the authority to decide (or the decision makers are present), a real need, and the timing is right. Check these before you ask for money.",
        es: "Un cliente está listo para comprar cuando tiene el presupuesto, la autoridad para decidir (o los que deciden están presentes), una necesidad real, y es buen momento. Revisa esto antes de pedir el dinero."
      }
    },
    {
      q: { en: "How should you open the appointment so the customer knows what is going to happen?", es: "¿Cómo debes empezar la cita para que el cliente sepa qué va a pasar?" },
      opts: {
        en: ["Tell a long story about yourself", "Jump straight to the price", "Proof, Promise, Plan", "Ask them to sign first"],
        es: ["Contar una historia larga sobre ti", "Ir directo al precio", "Prueba, Promesa, Plan", "Pedirles que firmen primero"]
      },
      a: 2,
      why: {
        en: "In about 15 to 20 seconds: show proof you have helped people like them, promise the result they want, and lay out the plan for the visit. Setting the agenda shows you are a professional and keeps you in control.",
        es: "En unos 15 a 20 segundos: muestra prueba de que has ayudado a gente como ellos, promete el resultado que quieren y explica el plan de la visita. Poner la agenda muestra que eres profesional y te mantiene en control."
      }
    },
    {
      q: { en: "In the CLOSER framework, what does the “S” stand for?", es: "En el método CLOSER, ¿qué significa la “S”?" },
      opts: {
        en: ["Say the price", "Sell the vacation", "Stay quiet", "Show every feature"],
        es: ["Decir el precio", "Vender las vacaciones (Sell the vacation)", "Quedarte callado", "Mostrar cada detalle"]
      },
      a: 1,
      why: {
        en: "CLOSER is Clarify why they're here, Label the problem, Overview past pain, Sell the vacation, Explain away concerns, Reinforce the decision. “Sell the vacation” means talk about Maui, not the airport. Paint the picture of life after the shelves are in, not every screw and slide.",
        es: "CLOSER es: Clarificar por qué están aquí, Etiquetar (Label) el problema, Repasar (Overview) el dolor pasado, Vender las vacaciones, Explicar las dudas, Reforzar la decisión. “Vender las vacaciones” es hablar de Maui, no del aeropuerto. Pinta cómo será su vida con las repisas, no cada tornillo."
      }
    },
    {
      q: { en: "What are the three steps of the AAA method for handling a question or concern?", es: "¿Cuáles son los tres pasos del método AAA para manejar una pregunta o duda?" },
      opts: {
        en: ["Argue, Agree, Apologize", "Acknowledge, Associate, Ask", "Answer, Add, Adjust", "Avoid, Admit, Accept"],
        es: ["Discutir, Aceptar, Disculparse", "Reconocer (Acknowledge), Asociar, Preguntar (Ask)", "Contestar, Agregar, Ajustar", "Evitar, Admitir, Aceptar"]
      },
      a: 1,
      why: {
        en: "Acknowledge what they said (repeat it back so they feel heard). Associate it with something positive or someone like them. Then Ask your next question. This keeps rapport so you can keep the conversation going.",
        es: "Reconoce lo que dijeron (repítelo para que se sientan escuchados). Asócialo con algo positivo o con alguien como ellos. Luego Pregunta lo siguiente. Así mantienes la buena relación y la conversación sigue."
      }
    },
    {
      q: { en: "Finish the rule from the training: “Whoever asks the most times...”", es: "Termina la regla del entrenamiento: “El que pregunta más veces...”" },
      opts: {
        en: ["...annoys the customer", "...gets the most sales", "...talks the most", "...loses rapport"],
        es: ["...molesta al cliente", "...hace más ventas", "...habla más", "...pierde la confianza"]
      },
      a: 1,
      why: {
        en: "The person asking questions leads the conversation. Good rapport is what lets you keep asking without the customer shutting down.",
        es: "La persona que hace las preguntas guía la conversación. La buena relación es lo que te deja seguir preguntando sin que el cliente se cierre."
      }
    },
    {
      q: { en: "The customer says, “Yes, let's do it!” What should you do next?", es: "El cliente dice: “¡Sí, hagámoslo!” ¿Qué debes hacer ahora?" },
      opts: {
        en: ["Explain more features so they feel even better", "Stop talking and complete the order", "Ask if they are sure", "Tell them about every other product"],
        es: ["Explicar más detalles para que se sientan mejor", "Dejar de hablar y completar la orden", "Preguntarles si están seguros", "Contarles de todos los demás productos"]
      },
      a: 1,
      why: {
        en: "Don't sell yourself out of a sale. New details after a yes can turn it back into a maybe. Get the order finished, then you can share extra info.",
        es: "No te salgas de una venta hablando. Más detalles después de un sí pueden volverlo un quizás. Termina la orden, y después puedes compartir más información."
      }
    },
    {
      q: { en: "What does the training say about lowering the price to close a sale?", es: "¿Qué dice el entrenamiento sobre bajar el precio para cerrar una venta?" },
      opts: {
        en: ["Always give a discount if they ask", "Never change the price to close. You can change the terms or the package", "Lower it only on weekends", "Lower it if they seem nice"],
        es: ["Siempre da descuento si lo piden", "Nunca cambies el precio para cerrar. Puedes cambiar los términos o el paquete", "Bájalo solo los fines de semana", "Bájalo si el cliente es amable"]
      },
      a: 1,
      why: {
        en: "If you drop the price once, customers believe every price is up for grabs, and they tell their neighbors. Changing the package (fewer shelves, or the DIY option) is different from a random discount.",
        es: "Si bajas el precio una vez, los clientes creen que todos los precios se negocian, y se lo cuentan a los vecinos. Cambiar el paquete (menos repisas, o la opción de instalarlas ellos mismos) es diferente a dar un descuento sin razón."
      }
    }
  ],
  practice: [
    {
      en: "From memory, say all six letters of CLOSER and what each one means. Then say the three letters of AAA. Have a teammate check you.",
      es: "De memoria, di las seis letras de CLOSER y lo que significa cada una. Luego di las tres de AAA. Pide a un compañero que te revise."
    },
    {
      en: "Explain BANT to a teammate in your own words, using an All Organized customer as the example.",
      es: "Explica BANT a un compañero con tus propias palabras, usando un cliente de All Organized como ejemplo."
    }
  ]
});

QUIZZES.push({
  id: "learning",
  num: 2,
  title: { en: "Understand Why", es: "Entiende el porqué" },
  focus: { en: "Learning", es: "Aprendizaje" },
  blurb: {
    en: "Knowing why a skill works lets you use it in your own words. The training says: don't memorize, understand.",
    es: "Saber por qué funciona una técnica te deja usarla con tus propias palabras. El entrenamiento dice: no memorices, entiende."
  },
  questions: [
    {
      q: { en: "Why do you ask the customer about what they have already tried and what has been frustrating them?", es: "¿Por qué le preguntas al cliente qué ha intentado y qué le ha frustrado?" },
      opts: {
        en: ["To fill time until you can show the price", "Because feeling the problem again creates motivation to fix it", "To make them feel bad", "So you can criticize other companies"],
        es: ["Para llenar tiempo hasta enseñar el precio", "Porque sentir el problema otra vez crea motivación para resolverlo", "Para que se sientan mal", "Para criticar a otras compañías"]
      },
      a: 1,
      why: {
        en: "“Deprivation creates motivation.” When a customer remembers kneeling on the floor to dig for a pot, they want a fix. The training puts it simply: the pain is the pitch. Be caring about it, not pushy.",
        es: "“La falta crea motivación.” Cuando el cliente recuerda cómo se arrodilla para buscar una olla, quiere una solución. El entrenamiento lo dice así: el dolor es el argumento de venta. Hazlo con cariño, no con presión."
      }
    },
    {
      q: { en: "The training says “details are death traps.” Why?", es: "El entrenamiento dice que “los detalles son trampas mortales.” ¿Por qué?" },
      opts: {
        en: ["Customers never care about details", "When you guess at an answer, the customer decides if it is the right one, and you lose control", "Details are always boring", "You should never share any facts"],
        es: ["A los clientes nunca les importan los detalles", "Cuando adivinas una respuesta, el cliente decide si es la correcta y tú pierdes el control", "Los detalles siempre aburren", "Nunca debes compartir datos"]
      },
      a: 1,
      why: {
        en: "Answering blind is rolling the dice. First ask a question about their question, like “What are you hoping to fit in there?” Then you can answer in a way that matches what they actually care about.",
        es: "Contestar a ciegas es tirar los dados. Primero haz una pregunta sobre su pregunta, como “¿Qué le gustaría guardar ahí?” Así puedes contestar de una forma que va con lo que de verdad le importa."
      }
    },
    {
      q: { en: "Why are questions often better than statements during a sale?", es: "¿Por qué las preguntas muchas veces son mejores que las afirmaciones en una venta?" },
      opts: {
        en: ["Questions are shorter", "Nobody can argue with a question, and the person asking guides the conversation", "Statements are against the rules", "Customers like being tested"],
        es: ["Las preguntas son más cortas", "Nadie puede discutir una pregunta, y el que pregunta guía la conversación", "Las afirmaciones van contra las reglas", "A los clientes les gusta que los pongan a prueba"]
      },
      a: 1,
      why: {
        en: "A statement gives the customer something to disagree with. A question keeps you “like smoke,” helpful and hard to argue with. People believe what they say more than what you say.",
        es: "Una afirmación le da al cliente algo con qué no estar de acuerdo. Una pregunta te deja “como humo,” útil y difícil de discutir. La gente cree más lo que ella misma dice que lo que tú dices."
      }
    },
    {
      q: { en: "Why should you find out early if a spouse needs to be part of the decision (“kill zombies early”)?", es: "¿Por qué debes saber temprano si la pareja tiene que ser parte de la decisión (“matar zombis temprano”)?" },
      opts: {
        en: ["So you can skip the spouse", "Before money is on the table, you are a helpful guide on their side. After, the same question feels like pressure", "Because it makes the visit shorter", "It doesn't matter when you ask"],
        es: ["Para no incluir a la pareja", "Antes de hablar de dinero, eres un guía que está de su lado. Después, la misma pregunta se siente como presión", "Porque hace la visita más corta", "No importa cuándo preguntes"]
      },
      a: 1,
      why: {
        en: "Deal with Budget, Authority, Need and Timing before you ask for money. At All Organized, the best fix is often to invite both homeowners to the free design session.",
        es: "Atiende el Presupuesto, la Autoridad, la Necesidad y el Tiempo antes de pedir dinero. En All Organized, muchas veces lo mejor es invitar a los dos dueños de casa a la sesión de diseño gratis."
      }
    },
    {
      q: { en: "Why does reading customer testimonials as a team help you sell?", es: "¿Por qué ayuda leer testimonios de clientes en equipo?" },
      opts: {
        en: ["So you can copy them word for word", "It builds your conviction. When you truly believe in the product, your tone comes out right", "It replaces training", "It makes the price higher"],
        es: ["Para copiarlos palabra por palabra", "Aumenta tu convicción. Cuando de verdad crees en el producto, tu tono sale bien", "Reemplaza el entrenamiento", "Sube el precio"]
      },
      a: 1,
      why: {
        en: "Sales is passing your belief to another person over a bridge of trust. Hearing how families use their roll-outs every day reminds you that you are helping people.",
        es: "Vender es pasar tu convicción a otra persona sobre un puente de confianza. Escuchar cómo las familias usan sus repisas todos los días te recuerda que estás ayudando a la gente."
      }
    },
    {
      q: { en: "What is the difference between being “kind” and being “nice” in sales?", es: "¿Cuál es la diferencia entre ser “bondadoso” y ser “amable” en ventas?" },
      opts: {
        en: ["There is no difference", "Nice avoids anything uncomfortable. Kind cares enough to ask hard questions that help the customer", "Kind means giving discounts", "Nice means being honest"],
        es: ["No hay diferencia", "Amable evita todo lo incómodo. Bondadoso se preocupa lo suficiente para hacer preguntas difíciles que ayudan al cliente", "Bondadoso significa dar descuentos", "Amable significa ser honesto"]
      },
      a: 1,
      why: {
        en: "A kind salesperson will gently ask, “What's really holding you back?” because they want the customer's problem solved. Ask hard questions before money comes up, and with respect.",
        es: "Un vendedor bondadoso pregunta con cuidado: “¿Qué es lo que de verdad le detiene?” porque quiere que se resuelva el problema del cliente. Haz las preguntas difíciles antes de hablar de dinero, y con respeto."
      }
    },
    {
      q: { en: "What is “commission breath”?", es: "¿Qué es el “aliento a comisión”?" },
      opts: {
        en: ["Talking fast because you're excited", "When the customer can tell you care more about the sale than about them", "Eating before an appointment", "Asking for a referral"],
        es: ["Hablar rápido por emoción", "Cuando el cliente nota que te importa más la venta que él", "Comer antes de una cita", "Pedir una recomendación"]
      },
      a: 1,
      why: {
        en: "When customers feel your goals and theirs don't match, they shut down. Keep the human first. The person who cares the most about the customer wins the sale.",
        es: "Cuando el cliente siente que tus metas y las suyas no son las mismas, se cierra. Pon a la persona primero. El que más se preocupa por el cliente gana la venta."
      }
    },
    {
      q: { en: "Why build your pitch around three main points (a “three-pillar pitch”)?", es: "¿Por qué armar tu presentación con tres puntos principales (los “tres pilares”)?" },
      opts: {
        en: ["Three is a lucky number", "People remember things in threes, and it keeps your pitch short so most of the time is about the customer", "So you can skip questions", "Because the product only has three parts"],
        es: ["El tres es de buena suerte", "La gente recuerda las cosas de tres en tres, y mantiene la presentación corta para que casi todo el tiempo sea sobre el cliente", "Para no hacer preguntas", "Porque el producto solo tiene tres partes"]
      },
      a: 1,
      why: {
        en: "The training says the product pitch itself should usually be under 2 minutes. Spend most of the visit understanding the customer. If you have seven features, group them into three big ideas.",
        es: "El entrenamiento dice que la presentación del producto debe ser casi siempre de menos de 2 minutos. Usa la mayor parte de la visita para entender al cliente. Si tienes siete detalles, júntalos en tres ideas grandes."
      }
    },
    {
      q: { en: "What does a good metaphor do in a sales conversation?", es: "¿Qué hace una buena comparación (metáfora) en una venta?" },
      opts: {
        en: ["Makes you sound smart", "Connects something the customer doesn't understand to something they already do", "Fills silence", "Replaces asking questions"],
        es: ["Te hace sonar inteligente", "Conecta algo que el cliente no entiende con algo que ya conoce", "Llena el silencio", "Reemplaza las preguntas"]
      },
      a: 1,
      why: {
        en: "The training uses a three-legged stool: take away one leg and it falls over. That's what teaching is. For a cabinet, you might compare a deep fixed shelf to a junk drawer you can never see the bottom of.",
        es: "El entrenamiento usa un banco de tres patas: si le quitas una, se cae. Así se enseña. Para un gabinete, podrías comparar una repisa fija y profunda con un cajón de cachivaches al que nunca le ves el fondo."
      }
    },
    {
      q: { en: "A customer says, “Wow, that's more than I expected.” What does the training say this usually means?", es: "Un cliente dice: “Uy, es más de lo que pensaba.” ¿Qué dice el entrenamiento que esto suele significar?" },
      opts: {
        en: ["They are definitely saying no", "It is often just a reaction, not a no. Don't assume they won't buy", "You should drop the price right away", "You should end the visit"],
        es: ["Definitivamente están diciendo que no", "Muchas veces es solo una reacción, no un no. No asumas que no van a comprar", "Debes bajar el precio de inmediato", "Debes terminar la visita"]
      },
      a: 1,
      why: {
        en: "Everyone has said “that's expensive” and bought it anyway. Calmly agree and keep going. Unless they say they don't want to buy, don't waste energy fighting an objection that isn't there.",
        es: "Todos hemos dicho “está caro” y lo compramos de todos modos. Dale la razón con calma y sigue. A menos que digan que no quieren comprar, no gastes energía peleando una objeción que no existe."
      }
    }
  ],
  practice: [
    {
      en: "Pick one idea from this quiz (like “details are death traps”) and teach it to a teammate in under one minute, without notes.",
      es: "Escoge una idea de este quiz (como “los detalles son trampas”) y enséñala a un compañero en menos de un minuto, sin notas."
    },
    {
      en: "Come up with your own metaphor for why a roll-out shelf beats a deep fixed shelf. Test it on a friend or family member.",
      es: "Inventa tu propia comparación para explicar por qué una repisa corrediza es mejor que una repisa fija y profunda. Pruébala con un amigo o familiar."
    }
  ]
});

QUIZZES.push({
  id: "application",
  num: 3,
  title: { en: "Use It at All Organized", es: "Úsalo en All Organized" },
  focus: { en: "Application", es: "Aplicación" },
  blurb: {
    en: "Now put the training to work with our roll-out shelves, our free design session, and real All Organized customers.",
    es: "Ahora usa el entrenamiento con nuestras repisas corredizas, nuestra sesión de diseño gratis y clientes reales de All Organized."
  },
  questions: [
    {
      q: { en: "It's Saturday at 10:00 a.m. A homeowner in Folsom just filled out the website form for a free design session. What's the best move?", es: "Es sábado a las 10:00 a.m. Una señora en Folsom acaba de llenar el formulario de la página para una sesión de diseño gratis. ¿Qué es lo mejor?" },
      opts: {
        en: ["Call her back Monday morning when the office opens", "Call her within a minute and offer two times, including this weekend", "Send a long email with all our prices", "Wait for her to call us"],
        es: ["Llamarla el lunes en la mañana cuando abra la oficina", "Llamarla en menos de un minuto y ofrecerle dos horarios, incluyendo este fin de semana", "Mandarle un correo largo con todos los precios", "Esperar a que ella nos llame"]
      },
      a: 1,
      why: {
        en: "She's thinking about her cabinets right now. Speed to lead plus weekend availability means you are the company that answered, and same-day or next-day appointments show up more often.",
        es: "Ella está pensando en sus gabinetes en este momento. Responder rápido y tener horarios el fin de semana te hace la compañía que contestó, y las citas para hoy o mañana se cumplen más seguido."
      }
    },
    {
      q: { en: "Which phone opener is closest to what the training teaches?", es: "¿Cuál forma de empezar la llamada se parece más a lo que enseña el entrenamiento?" },
      opts: {
        en: [
          "“Hi, is this Maria? Um, I'm calling from a shelf company, is now a bad time?”",
          "“Maria, quick question... This is Jake with All Organized. You asked about roll-out shelves for your pantry on our website. I'd love to set up your free design session. I have 2:00 or 4:00 tomorrow, which works better?”",
          "“When would you like us to come out sometime?”",
          "“I'm going to tell you about all five of our products first.”"
        ],
        es: [
          "“Hola, ¿es Maria? Eh, le llamo de una compañía de repisas, ¿es mal momento?”",
          "“Maria, una pregunta... Soy Jake de All Organized. Usted preguntó en nuestra página por repisas corredizas para su despensa. Me encantaría agendar su sesión de diseño gratis. Tengo a las 2:00 o a las 4:00 mañana, ¿cuál le queda mejor?”",
          "“¿Cuándo quiere que vayamos algún día?”",
          "“Primero le voy a contar de nuestros cinco productos.”"
        ]
      },
      a: 1,
      why: {
        en: "Use a confident tone, remind them exactly what they asked for (people forget what they filled out), and give two time choices instead of an open question.",
        es: "Habla con seguridad, recuérdale exactamente lo que pidió (la gente olvida lo que llenó), y dale dos opciones de horario en vez de una pregunta abierta."
      }
    },
    {
      q: { en: "Which night-before reminder text is most likely to get the customer to show up?", es: "¿Cuál recordatorio de la noche anterior tiene más probabilidad de que el cliente sí esté en la cita?" },
      opts: {
        en: [
          "“Reminder: appointment tomorrow.”",
          "“Hi Tom, it's Jake from All Organized. I looked at the photo of your corner cabinet and already have a couple of ideas. Excited to show you tomorrow at 4!”",
          "“Please confirm or we will cancel.”",
          "No text. They booked it, so they'll remember."
        ],
        es: [
          "“Recordatorio: cita mañana.”",
          "“Hola Tom, soy Jake de All Organized. Vi la foto de su gabinete de esquina y ya tengo un par de ideas. ¡Con gusto se las enseño mañana a las 4!”",
          "“Confirme o cancelamos.”",
          "Ningún mensaje. Ya agendaron, se van a acordar."
        ]
      },
      a: 1,
      why: {
        en: "Show you already did some prep just for them. People feel worse about missing an appointment when someone has put effort in. A personal text or quick voice memo beats a robot reminder.",
        es: "Muestra que ya te preparaste solo para ellos. A la gente le da más pena faltar cuando alguien ya hizo un esfuerzo. Un texto personal o una nota de voz rápida es mejor que un recordatorio automático."
      }
    },
    {
      q: { en: "While booking, the homeowner says, “My husband usually handles house projects.” What should you do?", es: "Mientras agendas, la señora dice: “Mi esposo es el que normalmente se encarga de los proyectos de la casa.” ¿Qué debes hacer?" },
      opts: {
        en: ["Ignore it and book her alone", "Ask if he can be at the design session too, and pick a time that works for both", "Tell her she should decide without him", "Cancel the appointment"],
        es: ["Ignorarlo y agendar solo con ella", "Preguntar si él puede estar en la sesión de diseño también, y buscar un horario que les funcione a los dos", "Decirle que decida sin él", "Cancelar la cita"]
      },
      a: 1,
      why: {
        en: "This is the Authority part of BANT, and it's a zombie to handle early. With both decision makers there, you can solve both of their concerns in one visit instead of hearing “I need to talk to my husband” at the end.",
        es: "Esta es la parte de Autoridad de BANT, y es un zombi que se atiende temprano. Con los dos que deciden presentes, resuelves las dudas de ambos en una sola visita en vez de oír “tengo que hablar con mi esposo” al final."
      }
    },
    {
      q: { en: "You walk into the kitchen for the design session. Which opener follows Proof, Promise, Plan?", es: "Entras a la cocina para la sesión de diseño. ¿Cuál inicio sigue Prueba, Promesa, Plan?" },
      opts: {
        en: [
          "“So... what do you want to do?”",
          "“Our family business has been helping Sacramento-area homes get more out of their cabinets since 1975. Today my goal is to help you reach everything in these cabinets easily. I'll ask a few questions, measure, show you some options, and if it's a fit we'll get you on the schedule. If not, no problem.”",
          "“Here's our price list, take a look.”",
          "“Let me tell you about the wood we use for 20 minutes.”"
        ],
        es: [
          "“Entonces... ¿qué quieren hacer?”",
          "“Nuestro negocio familiar ayuda a casas del área de Sacramento a aprovechar sus gabinetes desde 1975. Hoy mi meta es que usted pueda alcanzar todo en estos gabinetes fácilmente. Le haré unas preguntas, voy a medir, le enseño opciones, y si le conviene lo ponemos en la agenda. Si no, no hay problema.”",
          "“Aquí está la lista de precios, véala.”",
          "“Déjeme contarle de la madera que usamos por 20 minutos.”"
        ]
      },
      a: 1,
      why: {
        en: "Proof: since 1975, family business. Promise: reach everything easily. Plan: questions, measure, options, decision. It takes about 20 seconds and shows you're a pro.",
        es: "Prueba: desde 1975, negocio familiar. Promesa: alcanzar todo fácilmente. Plan: preguntas, medir, opciones, decisión. Toma como 20 segundos y muestra que eres profesional."
      }
    },
    {
      q: { en: "You ask, “What have you tried so far to keep this pantry organized?” She says, “I bought plastic bins.” What's the best follow-up?", es: "Preguntas: “¿Qué ha intentado para tener organizada esta despensa?” Ella dice: “Compré cajas de plástico.” ¿Qué es lo mejor que puedes responder?" },
      opts: {
        en: [
          "“Bins are a waste of money.”",
          "“Bins are great for grouping things. Do you still find yourself pulling bins out to get to the back?”",
          "“Okay. Let me show you our price list.”",
          "“Our shelves have dovetailed joints and nine-ply Baltic birch sides.”"
        ],
        es: [
          "“Las cajas son una pérdida de dinero.”",
          "“Las cajas sirven para agrupar cosas. ¿Todavía tiene que sacar cajas para llegar a lo de atrás?”",
          "“Bueno. Le enseño la lista de precios.”",
          "“Nuestras repisas tienen uniones de cola de milano y lados de abedul báltico de nueve capas.”"
        ]
      },
      a: 1,
      why: {
        en: "Give credit for what helped, then point out what was missing. Remember, if the bins had solved it, she wouldn't have called you. Never put down what the customer chose before.",
        es: "Reconoce lo que sí ayudó, luego señala lo que faltó. Recuerda, si las cajas lo hubieran resuelto, ella no te habría llamado. Nunca critiques lo que el cliente escogió antes."
      }
    },
    {
      q: { en: "Which is the strongest example of a three-pillar pitch for All Organized roll-outs?", es: "¿Cuál es el mejor ejemplo de presentación de tres pilares para las repisas de All Organized?" },
      opts: {
        en: [
          "A list of 15 features read off a spec sheet",
          "Custom-made to fit your exact cabinets, built to last with a lifetime warranty, and installed for you, usually in one day",
          "“They're nice and you'll like them.”",
          "Only talking about the price"
        ],
        es: [
          "Una lista de 15 detalles leídos de una hoja técnica",
          "Hechas a la medida exacta de sus gabinetes, construidas para durar con garantía de por vida, e instaladas por nosotros, normalmente en un día",
          "“Están bonitas y le van a gustar.”",
          "Hablar solo del precio"
        ]
      },
      a: 1,
      why: {
        en: "Three big ideas the customer can remember. Each one bundles many features (Baltic birch, dovetails, 100 lb slides all fit under “built to last”). Keep it under 2 minutes and tie each pillar to the pain she told you about.",
        es: "Tres ideas grandes que el cliente puede recordar. Cada una junta muchos detalles (abedul báltico, cola de milano, correderas de 100 libras caben en “construidas para durar”). Que dure menos de 2 minutos y conecta cada pilar con el problema que te contó."
      }
    },
    {
      q: { en: "The customer asks, “Do the shelves pull all the way out?” What's the best response?", es: "El cliente pregunta: “¿Las repisas salen completamente?” ¿Cuál es la mejor respuesta?" },
      opts: {
        en: [
          "“I think so? Maybe?”",
          "“Great question. Are you picturing reaching things all the way at the back without bending in?” Then: “We offer full extension, so you can see and reach the whole shelf.”",
          "“That's not important.”",
          "A five-minute talk about every type of drawer slide"
        ],
        es: [
          "“Creo que sí. ¿Tal vez?”",
          "“Buena pregunta. ¿Se imagina alcanzar las cosas hasta el fondo sin agacharse?” Luego: “Tenemos extensión completa, así ve y alcanza toda la repisa.”",
          "“Eso no es importante.”",
          "Una plática de cinco minutos sobre todos los tipos de correderas"
        ]
      },
      a: 1,
      why: {
        en: "Ask a question about their question so you know what they really care about, then answer. Our slides come in ¾ or full extension and are rated for 100 lbs, so match the answer to the need.",
        es: "Haz una pregunta sobre su pregunta para saber qué le importa de verdad, luego contesta. Nuestras correderas vienen en extensión de ¾ o completa y aguantan 100 libras, así que da la respuesta según la necesidad."
      }
    },
    {
      q: { en: "The customer says, “Home Depot has wire pull-out baskets that are way cheaper.” Which response follows the training?", es: "El cliente dice: “En Home Depot hay canastas de alambre corredizas mucho más baratas.” ¿Cuál respuesta sigue el entrenamiento?" },
      opts: {
        en: [
          "“Those are junk.”",
          "“Fair point. If ours were the same price as theirs, which would you pick?” Then let them tell you why.",
          "“Okay, I'll match their price.”",
          "“Then you should just go buy those.”"
        ],
        es: [
          "“Esas son basura.”",
          "“Tiene razón en preguntar. Si las nuestras costaran lo mismo que esas, ¿cuáles escogería?” Y deja que te diga por qué.",
          "“Bueno, le igualo el precio.”",
          "“Entonces vaya a comprar esas.”"
        ]
      },
      a: 1,
      why: {
        en: "This is the cheap competitor close. When they explain why ours is better (custom fit, installed for them, lifetime warranty), they are selling themselves. Then you can smile and say, “Right, and that's why ours costs more.”",
        es: "Este es el cierre del competidor barato. Cuando ellos explican por qué el nuestro es mejor (a la medida, instalado por nosotros, garantía de por vida), se están convenciendo solos. Luego puedes sonreír y decir: “Exacto, y por eso el nuestro cuesta más.”"
      }
    },
    {
      q: { en: "“Can you do 8 shelves for $800 instead of $995?” What's the best way to respond?", es: "“¿Me puede dar 8 repisas por $800 en vez de $995?” ¿Cuál es la mejor manera de responder?" },
      opts: {
        en: [
          "“Sure, $800 is fine.”",
          "Keep the price, remind them it already includes tax and installation with no hidden fees, and if the budget is real, offer to adjust the package (like 6 shelves for $795, or the DIY option)",
          "“No. Take it or leave it.”",
          "Give a discount but ask them not to tell anyone"
        ],
        es: [
          "“Claro, $800 está bien.”",
          "Mantener el precio, recordarle que ya incluye impuestos e instalación sin cargos escondidos, y si el presupuesto es real, ofrecer ajustar el paquete (como 6 repisas por $795, o la opción de instalarlas ellos mismos)",
          "“No. Lo toma o lo deja.”",
          "Dar descuento pero pedirle que no le diga a nadie"
        ]
      },
      a: 1,
      why: {
        en: "Never change price to close. Changing what they buy is different from a random discount. Customers talk to neighbors, and fair, steady pricing is part of why people trust a family business.",
        es: "Nunca cambies el precio para cerrar. Cambiar lo que compran es diferente a un descuento sin razón. Los clientes hablan con los vecinos, y los precios justos y fijos son parte de por qué la gente confía en un negocio familiar."
      }
    },
    {
      q: { en: "The customer says yes and pays. What should happen before you leave the house?", es: "El cliente dice que sí y paga. ¿Qué debe pasar antes de que salgas de la casa?" },
      opts: {
        en: [
          "Say “Good luck!” and leave",
          "Book the install date before you leave, explain what install day looks like, and introduce who is coming by name",
          "Tell them someone will call them eventually",
          "Start selling them a second order right away"
        ],
        es: [
          "Decir “¡Suerte!” y salir",
          "Agendar la fecha de instalación antes de irte, explicar cómo será el día de instalación, y presentar por nombre a quién va a venir",
          "Decirles que alguien les llamará en algún momento",
          "Empezar a venderles otra orden de inmediato"
        ]
      },
      a: 1,
      why: {
        en: "This is “Reinforce the decision” and “book a meeting from a meeting.” Install is usually about 3 to 4 weeks after ordering and is usually done in one day. A warm handshake to the installer, with your notes passed along, means fewer cold feet and cancellations.",
        es: "Esto es “Reforzar la decisión” y “agendar una cita desde una cita.” La instalación normalmente es como 3 a 4 semanas después de ordenar y casi siempre se termina en un día. Pasar al cliente con calidez al instalador, con tus notas, significa menos arrepentimientos y cancelaciones."
      }
    },
    {
      q: { en: "Before each design session, what's the simple habit that makes you look like a pro?", es: "Antes de cada sesión de diseño, ¿cuál hábito sencillo te hace ver como profesional?" },
      opts: {
        en: [
          "Spend 5 minutes reading the notes and any photos so the customer never has to repeat themselves",
          "Show up early and wait in the car on your phone",
          "Memorize the whole price list",
          "Skip prep so it feels more natural"
        ],
        es: [
          "Tomar 5 minutos para leer las notas y fotos para que el cliente nunca tenga que repetir lo que ya dijo",
          "Llegar temprano y esperar en el carro con el celular",
          "Memorizar toda la lista de precios",
          "No prepararte para que se sienta más natural"
        ]
      },
      a: 0,
      why: {
        en: "Repeating back what they told the office (“You mentioned the deep cabinet next to the stove is the worst one”) makes customers feel heard. Making them repeat themselves feels the opposite.",
        es: "Repetir lo que le dijeron a la oficina (“Usted mencionó que el gabinete profundo junto a la estufa es el peor”) hace que el cliente se sienta escuchado. Hacerlo repetir se siente lo contrario."
      }
    }
  ],
  practice: [
    {
      en: "Role-play the first phone call with a teammate. Use the confident opener, remind them what they asked for, and offer two times. Do it 5 times in a row.",
      es: "Practica la primera llamada con un compañero. Usa el inicio con seguridad, recuérdale lo que pidió y ofrece dos horarios. Hazlo 5 veces seguidas."
    },
    {
      en: "Write your own Proof, Promise, Plan opener for a design session and say it out loud in under 20 seconds.",
      es: "Escribe tu propio inicio de Prueba, Promesa, Plan para una sesión de diseño y dilo en voz alta en menos de 20 segundos."
    }
  ]
});

QUIZZES.push({
  id: "adaptation",
  num: 4,
  title: { en: "Handle Real Life", es: "Maneja la vida real" },
  focus: { en: "Adaptation", es: "Adaptación" },
  blurb: {
    en: "Real appointments don't follow the script perfectly. These scenarios test how you adapt the training when things get tricky.",
    es: "Las citas reales no siguen el guion perfecto. Estos casos prueban cómo adaptas el entrenamiento cuando las cosas se complican."
  },
  questions: [
    {
      q: { en: "At the end of the design session, she says, “I need to talk to my husband first.” What's the best first question?", es: "Al final de la sesión de diseño, ella dice: “Primero tengo que hablar con mi esposo.” ¿Cuál es la mejor primera pregunta?" },
      opts: {
        en: [
          "“Can't you just decide without him?”",
          "“Totally understand. What do you think would happen if he said no?”",
          "“Okay, I'll call you next month.”",
          "“That's what everyone says.”"
        ],
        es: [
          "“¿No puede decidir sin él?”",
          "“Lo entiendo completamente. ¿Qué cree que pasaría si él dijera que no?”",
          "“Bueno, le llamo el próximo mes.”",
          "“Eso dice todo el mundo.”"
        ]
      },
      a: 1,
      why: {
        en: "The training says about 1 in 3 people answer, “I'd do it anyway.” Then you can simply move forward. If not, you go to the next step: “What do you think his main concern would be?”",
        es: "El entrenamiento dice que como 1 de cada 3 personas contesta: “Lo haría de todos modos.” Entonces simplemente avanzas. Si no, sigues al próximo paso: “¿Cuál cree que sería su mayor preocupación?”"
      }
    },
    {
      q: { en: "She answers, “He'd probably say it costs too much.” What's the best way to adapt?", es: "Ella contesta: “Probablemente diría que cuesta mucho.” ¿Cuál es la mejor forma de adaptarte?" },
      opts: {
        en: [
          "Drop the price so he'll say yes",
          "Ask about past agreements: “Does he know how frustrating these cabinets have been for you?” Then focus on value: lifetime warranty, 60 to 75% more usable space, and no more kneeling to dig",
          "Tell her he's wrong",
          "Give up and leave a brochure"
        ],
        es: [
          "Bajar el precio para que él diga que sí",
          "Preguntar por acuerdos pasados: “¿Él sabe lo frustrantes que han sido estos gabinetes para usted?” Luego enfócate en el valor: garantía de por vida, de 60 a 75% más espacio útil, y no más arrodillarse a buscar",
          "Decirle que él está equivocado",
          "Rendirte y dejar un folleto"
        ]
      },
      a: 1,
      why: {
        en: "Now the real concern is out (price), so you can talk about it. Money concerns are about value: nothing is too expensive, it's just not seen as worth it yet. And if he already doesn't like the current problem, why would he say no to fixing it?",
        es: "Ahora salió la preocupación real (el precio), y puedes hablar de eso. Las dudas de dinero son sobre el valor: nada es demasiado caro, solo que todavía no se ve que valga la pena. Y si a él ya no le gusta el problema actual, ¿por qué diría que no a resolverlo?"
      }
    },
    {
      q: { en: "A customer says, “Let me think about it.” What should you say?", es: "Un cliente dice: “Déjeme pensarlo.” ¿Qué debes decir?" },
      opts: {
        en: [
          "“Sure, call me whenever!” and pack up",
          "“Of course. So I can help, what's your main concern?” or “What would make this a yes for you?”",
          "“If you don't buy today, the price goes up.” (when it doesn't)",
          "Start reading the warranty out loud"
        ],
        es: [
          "“¡Claro, llámeme cuando quiera!” y recoger tus cosas",
          "“Claro que sí. Para poder ayudarle, ¿cuál es su mayor duda?” o “¿Qué haría que esto fuera un sí para usted?”",
          "“Si no compra hoy, el precio sube.” (cuando no es cierto)",
          "Empezar a leer la garantía en voz alta"
        ]
      },
      a: 1,
      why: {
        en: "“Let me think about it” is a stall, not the real reason. A calm, curious question brings out the real concern so you can actually help. Never make up fake deadlines. That's dishonest.",
        es: "“Déjeme pensarlo” es una forma de aplazar, no la razón real. Una pregunta tranquila y curiosa saca la duda verdadera para que de verdad puedas ayudar. Nunca inventes fechas límite falsas. Eso es deshonesto."
      }
    },
    {
      q: { en: "After seeing the design, the customer frowns and says, “That's a lot of money for shelves.” What's the best response?", es: "Después de ver el diseño, el cliente frunce el ceño y dice: “Es mucho dinero por unas repisas.” ¿Cuál es la mejor respuesta?" },
      opts: {
        en: [
          "“You're right, let me see what discount I can give you.”",
          "“It's an investment, totally fair. Let me ask you: if this fixed these cabinets for good, so you never dig on your knees again, would it be worth it to you?”",
          "“It's actually cheap compared to most things.”",
          "Go quiet and start packing up"
        ],
        es: [
          "“Tiene razón, déjeme ver qué descuento le puedo dar.”",
          "“Es una inversión, tiene razón. Déjeme preguntarle: si esto resolviera estos gabinetes para siempre, para que nunca más tenga que buscar arrodillado, ¿valdría la pena para usted?”",
          "“En realidad es barato comparado con casi todo.”",
          "Quedarte callado y empezar a recoger"
        ]
      },
      a: 1,
      why: {
        en: "The training says money objections are about value: nothing is too expensive, it's just not worth it to them yet. Alex's example: if he offered you a Ferrari for $5,000, you would find the money. So don't argue about the price. Acknowledge it, then help them see the value.",
        es: "El entrenamiento dice que las objeciones de dinero son sobre el valor: nada es demasiado caro, solo que todavía no ven que vale la pena. El ejemplo de Alex: si te ofreciera un Ferrari por $5,000, encontrarías el dinero. Así que no discutas el precio. Reconócelo y luego ayúdale a ver el valor."
      }
    },
    {
      q: { en: "The customer smiles and asks, “Come on, can you knock a couple hundred off?” Which response matches the training?", es: "El cliente sonríe y pregunta: “Ándele, ¿me puede quitar unos doscientos?” ¿Cuál respuesta va con el entrenamiento?" },
      opts: {
        en: [
          "“Okay, just for you, $200 off.”",
          "Smile back: “We could do it for more!” Then calmly hold the price and remind them it already includes tax and installation, with no hidden fees",
          "“I'll knock off $200 if you sign right now and don't tell your neighbors.”",
          "“No discounts, ever. Next question.” (said coldly)"
        ],
        es: [
          "“Está bien, solo para usted, $200 menos.”",
          "Sonríe también: “¡Se lo podemos dar más caro!” Luego mantén el precio con calma y recuérdale que ya incluye impuestos e instalación, sin cargos escondidos",
          "“Le quito $200 si firma ahorita y no le dice a sus vecinos.”",
          "“Nunca damos descuento. Siguiente pregunta.” (dicho con frialdad)"
        ]
      },
      a: 1,
      why: {
        en: "Asking for a discount is usually a buying signal. Alex says his playful “we could do it for more” has almost never failed, because it re-anchors the price higher and they decide the real price is fine. It only works with a warm, friendly tone. Never change the price to close.",
        es: "Pedir descuento casi siempre es señal de que quieren comprar. Alex dice que su broma de “se lo damos más caro” casi nunca le ha fallado, porque sube la referencia del precio y el cliente decide que el precio real está bien. Solo funciona con un tono cálido y amistoso. Nunca cambies el precio para cerrar."
      }
    },
    {
      q: { en: "The homeowner says, “This looks great, but I want to get a quote from another roll-out shelf company first.” What's the best way to handle it?", es: "El dueño dice: “Se ve muy bien, pero primero quiero pedir una cotización a otra compañía de repisas corredizas.” ¿Cuál es la mejor forma de manejarlo?" },
      opts: {
        en: [
          "“They're terrible, don't bother.”",
          "“That's smart, it's a big decision.” Then ask, “What will you be comparing?” and “If their price were the same as ours, which one would you pick?”",
          "“Okay, here's my card,” and leave",
          "“If you don't decide today, I can't help you.”"
        ],
        es: [
          "“Son malísimos, ni se moleste.”",
          "“Es inteligente, es una decisión grande.” Luego pregunta: “¿Qué va a comparar?” y “Si su precio fuera igual al nuestro, ¿con cuál se quedaría?”",
          "“Bueno, aquí está mi tarjeta,” y te vas",
          "“Si no decide hoy, no le puedo ayudar.”"
        ]
      },
      a: 1,
      why: {
        en: "The video doesn't cover quote shopping by name, but its tools fit. Use AAA to agree with them, never put down a competitor, and ask about the variables they'll use to decide. The cheap competitor close (“if they were the same, which would you pick?”) lets them tell you why ours is better. Often the real concern comes out right there.",
        es: "El video no habla por nombre de pedir cotizaciones, pero sus herramientas sirven. Usa AAA para darle la razón, nunca critiques a la competencia, y pregunta qué va a usar para decidir. El cierre del competidor barato (“si fueran iguales, ¿cuál escogería?”) deja que te diga por qué el nuestro es mejor. Muchas veces la duda real sale ahí mismo."
      }
    },
    {
      q: { en: "They still want to compare quotes. What should you do before you leave?", es: "Todavía quieren comparar cotizaciones. ¿Qué debes hacer antes de irte?" },
      opts: {
        en: [
          "Leave without a plan and hope they call",
          "Leave a clear written quote that spells out what's included (custom fit, Baltic birch with dovetail joints, 100 lb slides, lifetime warranty, tax and installation) and book a time to talk again",
          "Tell them you'll beat any price",
          "Ask them to send you the other company's quote so you can undercut it"
        ],
        es: [
          "Irte sin plan y esperar que llamen",
          "Dejar una cotización clara por escrito que diga lo que incluye (a la medida, abedul báltico con cola de milano, correderas de 100 libras, garantía de por vida, impuestos e instalación) y agendar una hora para hablar otra vez",
          "Decirles que le ganas a cualquier precio",
          "Pedirles la cotización de la otra compañía para bajarle el precio"
        ]
      },
      a: 1,
      why: {
        en: "Help them compare fairly, apples to apples. Many cheaper quotes leave out tax, installation or the warranty. Then “book a meeting from a meeting,” so the next step is already set. “No for now” isn't “no forever.”",
        es: "Ayúdales a comparar de forma justa, manzanas con manzanas. Muchas cotizaciones más baratas no incluyen impuestos, instalación o garantía. Luego “agenda una cita desde una cita,” para que el siguiente paso ya esté listo. “No por ahora” no es “no para siempre.”"
      }
    },
    {
      q: { en: "A week later, the customer calls: “The other company quoted me $200 less.” What's the best response?", es: "Una semana después, el cliente llama: “La otra compañía me cotizó $200 menos.” ¿Cuál es la mejor respuesta?" },
      opts: {
        en: [
          "“Fine, I'll match it.”",
          "“Thanks for telling me. Does their price include tax, installation and a lifetime warranty? And if we were the same price, which would you choose?” Then hold our price",
          "“Then go with them.” and hang up",
          "Criticize the other company's workers"
        ],
        es: [
          "“Está bien, le igualo el precio.”",
          "“Gracias por decirme. ¿Su precio incluye impuestos, instalación y garantía de por vida? Y si costáramos lo mismo, ¿con quién se quedaría?” Luego mantén nuestro precio",
          "“Entonces váyase con ellos.” y colgar",
          "Criticar a los trabajadores de la otra compañía"
        ]
      },
      a: 1,
      why: {
        en: "Don't negotiate the price. Ask questions, compare what's actually included, and let the customer name the reasons they liked us. If they say ours is better, smile: “Right, and that's why it costs a little more.” Customers will pay for value they can see.",
        es: "No negocies el precio. Haz preguntas, compara lo que de verdad incluye, y deja que el cliente diga las razones por las que le gustamos. Si dice que el nuestro es mejor, sonríe: “Exacto, y por eso cuesta un poco más.” Los clientes pagan por el valor que pueden ver."
      }
    },
    {
      q: { en: "“We're way too busy right now, maybe after the holidays.” Which response adapts the training best?", es: "“Ahorita estamos muy ocupados, tal vez después de las fiestas.” ¿Cuál respuesta adapta mejor el entrenamiento?" },
      opts: {
        en: [
          "“Okay, bye.”",
          "“Totally understand, the holidays are crazy. The good news is this takes almost nothing from you. Install is usually 3 to 4 weeks out and usually done in one visit. Want to pick a date that works around your plans?”",
          "“You'll never be less busy, so you're wasting my time.”",
          "Offer a discount for waiting"
        ],
        es: [
          "“Bueno, adiós.”",
          "“Lo entiendo, las fiestas son una locura. Lo bueno es que esto casi no le quita tiempo. La instalación normalmente es en 3 a 4 semanas y casi siempre en una sola visita. ¿Quiere escoger una fecha que le funcione con sus planes?”",
          "“Nunca va a estar menos ocupado, me está haciendo perder el tiempo.”",
          "Ofrecer descuento por esperar"
        ]
      },
      a: 1,
      why: {
        en: "“Too busy” is about priorities, not time. Acknowledge it kindly, then show how little time it takes from them. Being busy is also a great reason to want a kitchen where everything is easy to grab.",
        es: "“Muy ocupado” se trata de prioridades, no de tiempo. Reconócelo con amabilidad, luego muestra lo poco que les quita. Estar ocupado también es buena razón para querer una cocina donde todo sea fácil de agarrar."
      }
    },
    {
      q: { en: "A handy homeowner says, “I'll just watch some YouTube videos and build them myself.” What's the best response?", es: "Un señor bueno para arreglar cosas dice: “Voy a ver videos en YouTube y las hago yo mismo.” ¿Cuál es la mejor respuesta?" },
      opts: {
        en: [
          "“You'll mess it up.”",
          "Agree it's a great instinct, then mention our DIY option: custom-built to his measurements, shipped or picked up already assembled, installs with four screws, and $10 less per standard shelf",
          "Ignore him and keep pitching full install",
          "End the visit"
        ],
        es: [
          "“Le va a salir mal.”",
          "Darle la razón en que es buena idea, luego mencionar nuestra opción para instalar uno mismo: hechas a sus medidas, enviadas o recogidas ya armadas, se instalan con cuatro tornillos, y $10 menos por repisa estándar",
          "Ignorarlo y seguir vendiendo la instalación completa",
          "Terminar la visita"
        ]
      },
      a: 1,
      why: {
        en: "The training says agree with the “I'll do it myself” customer, don't fight them. At All Organized we can meet him where he is. He still gets a custom-fit shelf, and we still get the sale. That's adapting the package, not the price.",
        es: "El entrenamiento dice que le des la razón al cliente que dice “lo hago yo,” no pelees. En All Organized podemos ir a su ritmo. Él recibe una repisa a la medida, y nosotros hacemos la venta. Eso es adaptar el paquete, no el precio."
      }
    },
    {
      q: { en: "Before you've measured anything, a customer asks, “Exactly how much will my whole kitchen cost?” What's the best move?", es: "Antes de medir nada, un cliente pregunta: “¿Exactamente cuánto me va a costar toda la cocina?” ¿Qué es lo mejor?" },
      opts: {
        en: [
          "Guess a big number to be safe",
          "Explain it depends on how many shelves fit their cabinets, share our simple price tiers as a guide (like 6 shelves for $795, tax and install included), then measure",
          "Refuse to talk about price",
          "Guess a low number so they stay interested"
        ],
        es: [
          "Adivinar un número alto por si acaso",
          "Explicar que depende de cuántas repisas caben en sus gabinetes, compartir nuestros precios como guía (como 6 repisas por $795, con impuestos e instalación incluidos), y luego medir",
          "Negarte a hablar del precio",
          "Adivinar un número bajo para que sigan interesados"
        ]
      },
      a: 1,
      why: {
        en: "It's like the mechanic who needs to look under the hood before saying what's wrong. Don't guess, because a guess is a detail death trap. Being open about our price tiers builds trust while you get the real measurements.",
        es: "Es como el mecánico que necesita revisar el motor antes de decir qué tiene el carro. No adivines, porque adivinar es una trampa de detalles. Ser abierto con nuestros precios genera confianza mientras tomas las medidas reales."
      }
    },
    {
      q: { en: "You heard “no” at your last three appointments. Your next one is in 20 minutes. What should you do?", es: "Escuchaste “no” en tus últimas tres citas. La siguiente es en 20 minutos. ¿Qué debes hacer?" },
      opts: {
        en: [
          "Cancel it, today is just a bad day",
          "Take 5 minutes to read this customer's notes, reset your energy, and remember that volume beats luck",
          "Show up and rush through it",
          "Decide sales isn't for you"
        ],
        es: [
          "Cancelarla, hoy es un mal día",
          "Tomar 5 minutos para leer las notas de este cliente, recuperar tu energía, y recordar que el volumen le gana a la suerte",
          "Llegar y hacerla de prisa",
          "Decidir que las ventas no son para ti"
        ]
      },
      a: 1,
      why: {
        en: "Everyone struggles at first, even the best. Each appointment is a new rep. Great closers don't get “hot” by luck, they keep doing the basics every time. (The trainer even jumped on a mini trampoline between calls to keep his mood up!)",
        es: "Todos empezaron mal, hasta los mejores. Cada cita es una nueva práctica. Los grandes vendedores no se “calientan” por suerte, siguen haciendo lo básico cada vez. (¡El entrenador hasta brincaba en un mini trampolín entre llamadas para mantener el ánimo!)"
      }
    },
    {
      q: { en: "During the design session, you realize the customer's cabinets aren't a good fit for what they want, and our product won't really solve their problem. What should you do?", es: "Durante la sesión de diseño, te das cuenta de que los gabinetes del cliente no sirven para lo que quiere, y nuestro producto no le va a resolver el problema. ¿Qué debes hacer?" },
      opts: {
        en: [
          "Sell it anyway, a sale is a sale",
          "Be honest, tell them it's not the right fit, and point them in a better direction if you can",
          "Say nothing and let the installer deal with it",
          "Pressure them harder"
        ],
        es: [
          "Venderlo de todos modos, una venta es una venta",
          "Ser honesto, decirle que no es lo indicado, y orientarlo hacia una mejor opción si puedes",
          "No decir nada y que el instalador se encargue",
          "Presionar más"
        ]
      },
      a: 1,
      why: {
        en: "The person who cares the most about the customer wins. If they would be better off not buying, stop. Honesty builds the reputation and referrals a family business lives on, and it keeps your conscience clean.",
        es: "El que más se preocupa por el cliente gana. Si al cliente le conviene no comprar, detente. La honestidad construye la reputación y las recomendaciones de las que vive un negocio familiar, y te deja la conciencia tranquila."
      }
    },
    {
      q: { en: "A customer told you, “Not now, maybe in the spring.” What should you do?", es: "Un cliente te dijo: “Ahora no, tal vez en la primavera.” ¿Qué debes hacer?" },
      opts: {
        en: [
          "Delete them from the list",
          "Thank them, note it in the CRM, and plan a friendly check-in. “No for now” isn't “no forever”",
          "Call them every day until they buy",
          "Send them a guilt-trip message"
        ],
        es: [
          "Borrarlos de la lista",
          "Darles las gracias, anotarlo en el sistema, y planear un seguimiento amistoso. “No por ahora” no es “no para siempre”",
          "Llamarles todos los días hasta que compren",
          "Mandarles un mensaje para que se sientan culpables"
        ]
      },
      a: 1,
      why: {
        en: "Reach back out every few months for a quick, friendly check-in. A short fun text can bring a quiet customer back. Don't be afraid of the work or the rejection.",
        es: "Vuelve a contactarlos cada pocos meses con un saludo rápido y amistoso. Un texto corto y divertido puede regresar a un cliente que estaba callado. No le tengas miedo al trabajo ni al rechazo."
      }
    },
    {
      q: { en: "You're new, and the leads you're getting seem harder to close. What does the training suggest?", es: "Eres nuevo, y los clientes que te tocan parecen más difíciles de cerrar. ¿Qué sugiere el entrenamiento?" },
      opts: {
        en: [
          "Complain until you get better leads",
          "See “yellow” leads as gold: take as many as you can, because hard customers are the best practice",
          "Only take easy leads",
          "Skip leads you don't like"
        ],
        es: [
          "Quejarte hasta que te den mejores clientes",
          "Ver a los clientes “amarillos” como oro: toma todos los que puedas, porque los clientes difíciles son la mejor práctica",
          "Solo tomar clientes fáciles",
          "Saltarte los clientes que no te gustan"
        ]
      },
      a: 1,
      why: {
        en: "Be a “trash man.” Tough leads are free training. If you can help a hard customer, the easier ones feel simple. Just never sell to someone the product can't help.",
        es: "Sé el que recoge lo que nadie quiere. Los clientes difíciles son entrenamiento gratis. Si puedes ayudar a uno difícil, los fáciles se sienten sencillos. Solo nunca le vendas a alguien a quien el producto no le va a ayudar."
      }
    },
    {
      q: { en: "The customer is almost ready but worried the shelves won't hold up. They're quiet and on the fence. What's the best move?", es: "El cliente casi está listo pero le preocupa que las repisas no aguanten. Está callado y no se decide. ¿Qué es lo mejor?" },
      opts: {
        en: [
          "Stay silent and wait as long as it takes",
          "Stack a few reasons from different angles on that same worry: lifetime warranty, dovetailed Baltic birch, 100 lb slides, plus our 100% satisfaction guarantee, then ask, “Feeling good about it?”",
          "Change the subject to the weather",
          "Tell them they're worrying too much"
        ],
        es: [
          "Quedarte callado y esperar lo que sea necesario",
          "Juntar varias razones desde diferentes ángulos sobre esa misma duda: garantía de por vida, abedul báltico con uniones de cola de milano, correderas de 100 libras, más nuestra garantía de satisfacción del 100%, y luego preguntar: “¿Se siente bien con esto?”",
          "Cambiar el tema al clima",
          "Decirle que se preocupa demasiado"
        ]
      },
      a: 1,
      why: {
        en: "When someone is teetering, the training says stack closes: hit the same concern from a few angles, then ask again. A guarantee makes “best case, worst case” easy: the downside is small and the upside is a kitchen that works.",
        es: "Cuando alguien no se decide, el entrenamiento dice que juntes cierres: ataca la misma duda desde varios ángulos y pregunta otra vez. Una garantía hace fácil el “mejor caso, peor caso”: el riesgo es poco y la ganancia es una cocina que funciona."
      }
    },
    {
      q: { en: "Which habit best describes how great salespeople stay great?", es: "¿Cuál hábito describe mejor cómo los grandes vendedores siguen siendo grandes?" },
      opts: {
        en: [
          "They find a secret trick that works every time",
          "They never skip the fundamentals: prep, follow the script, ask good questions, listen, and do a warm handoff every single time",
          "They talk more than the customer",
          "They only work when they feel like it"
        ],
        es: [
          "Encuentran un truco secreto que siempre funciona",
          "Nunca se saltan lo básico: prepararse, seguir el guion, hacer buenas preguntas, escuchar, y pasar al cliente con calidez cada vez",
          "Hablan más que el cliente",
          "Solo trabajan cuando tienen ganas"
        ]
      },
      a: 1,
      why: {
        en: "“Don't be cute.” In backyard football, the fancy trick play fumbles. The simple run up the middle works. Let the customer do about two-thirds of the talking, and do the basics over and over.",
        es: "“No te hagas el listo.” En el fútbol del patio, la jugada elegante termina en error. La jugada sencilla por el centro funciona. Deja que el cliente hable como dos tercios del tiempo, y haz lo básico una y otra vez."
      }
    }
  ],
  practice: [
    {
      en: "Role-play “I need to talk to my husband” with a teammate. Walk through all four steps: What if he said no? What's his main concern? Past agreements. Support, not permission. Do it until it feels smooth.",
      es: "Practica “tengo que hablar con mi esposo” con un compañero. Haz los cuatro pasos: ¿Y si él dice que no? ¿Cuál es su mayor duda? Acuerdos pasados. Apoyo, no permiso. Repite hasta que salga natural."
    },
    {
      en: "Role-play “I want to get a quote from another company first” with a teammate. Agree with them, ask what they'll compare, use the “if we were the same price” question, and book the next talk before you leave.",
      es: "Practica “primero quiero pedir una cotización a otra compañía” con un compañero. Dale la razón, pregunta qué va a comparar, usa la pregunta de “si costáramos lo mismo,” y agenda la siguiente plática antes de irte."
    },
    {
      en: "Think of a real appointment that didn't close. Write down what the customer said, and how you would handle it now using AAA (Acknowledge, Associate, Ask).",
      es: "Piensa en una cita real que no cerró. Escribe lo que dijo el cliente, y cómo lo manejarías ahora usando AAA (Reconocer, Asociar, Preguntar)."
    }
  ]
});
