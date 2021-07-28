import React from "react";
import { GrigBox } from "./StyledPageTree";
import { ImageCard } from "./StyledPageTree";
import { Main } from "./StyledPageTree";
import { Grig1 } from "./StyledPageTree";
import { H2Title } from "./StyledPageTree";
import { H6Title } from "./StyledPageTree";
import { Grig2Column } from "./StyledPageTree";

function PageFree() {
  return (
    <Main>
      <H2Title>Samesing</H2Title>
      <GrigBox>
        <Grig2Column>
          <Grig1>
            <ImageCard src="image2.jpg" alt="this img" />
          </Grig1>
          <div>
            <H2Title>Lorem ipsum dolor sit amet.</H2Title>
            <H6Title>
              Lorem ipsum dolor sit ectetuisicing elit. Incidunt modi tempora
              aut ducimus maiores, nihil amet ab onsectetur adipisicing elit.
              Incidunt modi tempora aut ducimus maiores, nihil amet ab
              onsectetur adipisicing elit. Incidunt modi tempora aut ducimus
              maiores, nihil amet ab t voluptatum, odio commodi corporis saepe.
              Optio dolor pariatur commodi deleniti expedita. Voluptate sequi
              necessitatibus eum officia impedit dolor maxime eos quos
              doloremque.
            </H6Title>
          </div>
        </Grig2Column>
        <Grig2Column>
          <Grig1>
            <ImageCard src="image3.jpg" alt="this img" />
          </Grig1>
          <div>
            <H2Title>Lorem ipsum dolor sit amet.</H2Title>
            <H6Title>
              Lorem ipsum dolor sit ametb impedionseiing elit. Incidunt modi
              tempora aut ducimus maiores, nihil amet ab onsectetur adipisicing
              elit. Incidunt modi tempora aut ducimus maiores, nihil amet ab
              onsectetur adipisicing elit. Incidunt modi tempora aut ducimus
              maiores, nihil amet ab t voluptatum, odio commodi corporis saepe.
              Optio dolor pariatur commodi deleniti expedita. Voluptate sequi
              necessitatibus eum officia impedit dolor maxime eos quos
              doloremque.
            </H6Title>
          </div>
        </Grig2Column>
        <Grig2Column>
          <Grig1>
            <ImageCard src="image4.jpg" alt="this img" />
          </Grig1>
          <div>
            <H2Title>Lorem ipsum dolor sit amet.</H2Title>
            <H6Title>
              Lorem ipsum dolos maiores, t ab onsectetur adipisicing elit.
              Incidunt modi tempora aut ducimus maiores, nihil amet ab
              onsectetur adipisicing elit. Incidunt modi tempora aut ducimus
              maiores, nihil amet ab t voluptatum, odio commodi corporis saepe.
              Optio dolor pariatur commodi deleniti expedita. Voluptate sequi
              necessitatibus eum officia impedit dolor maxime eos quos
              doloremque.
            </H6Title>
          </div>
        </Grig2Column>
      </GrigBox>
    </Main>
  );
}
export default PageFree;
