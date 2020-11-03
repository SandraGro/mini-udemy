import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


function InfoTemplate() {
  let { genericSection } = useParams();

  return (
    <Jumbotron fluid>
      <Container>
        {genericSection === "teaching" ? (
          <h1>Teach on Udemy</h1>
        ) : (
          <h1>Udemyx for Business</h1>
        )}
        <div>
          <p>
            Lorem ipsum hana dul sae me want bananaaa! Chasy poopayee chasy
            potatoooo. Tulaliloo tank yuuu! Butt po kass poulet tikka masala
            jeje me want bananaaa! Bee do bee do bee do para tú. Hana dul sae
            daa pepete poopayee wiiiii poulet tikka masala poopayee poopayee.
            Uuuhhh ti aamoo! Me want bananaaa! Chasy uuuhhh para tú tulaliloo
            gelatooo bappleees wiiiii underweaaar. Chasy bee do bee do bee do me
            want bananaaa! Wiiiii baboiii tatata bala tu baboiii para tú
            aaaaaah.
          </p>
          <p>
            Pepete poulet tikka masala jiji belloo! Hahaha. Uuuhhh poulet tikka
            masala bananaaaa la bodaaa poulet tikka masala tulaliloo aaaaaah
            chasy bappleees baboiii. Underweaaar hana dul sae daa butt tatata
            bala tu para tú hana dul sae hana dul sae. Jeje poopayee butt tatata
            bala tu daa hana dul sae chasy po kass hana dul sae. Para tú jiji me
            want bananaaa! Bee do bee do bee do. Tulaliloo ti aamoo! Jiji hana
            dul sae jiji jeje pepete tank yuuu! Bananaaaa baboiii poulet tikka
            masala baboiii aaaaaah.
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default InfoTemplate;
