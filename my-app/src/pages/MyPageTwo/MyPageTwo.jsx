import React from "react";
import { Main } from "./StyledPageTwo";
import { DivBox } from "./StyledPageTwo";
import { Card } from "./StyledPageTwo";
import { ImageCard } from "./StyledPageTwo";
import { H2Card } from "./StyledPageTwo";
import { H3Card } from "./StyledPageTwo";
import { H5Card } from "./StyledPageTwo";
import { BoxImage } from "./StyledPageTwo";
import { Button } from "./StyledPageTwo";
import { BoxAboutUs } from "./StyledPageTwo";
import { TitleP } from "./StyledPageTwo";
import { DivAboutUs } from "./StyledPageTwo";

function PageTwo() {
  return (
    <div>
      <Main>
        <DivBox>
          <Card>
            <BoxImage>
              <ImageCard src="image2.jpg" alt="this img" />
            </BoxImage>
            <H3Card>Lorem ipsum dolor sit amet</H3Card>
            <H5Card>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </H5Card>
            <Button
              onClick={() => {
                console.log("Click");
              }}
            >
              Click me
            </Button>
          </Card>
          <Card>
            <BoxImage>
              <ImageCard src="image3.jpg" alt="this img" />
            </BoxImage>
            <H3Card>Lorem ipsum dolor sit amet</H3Card>
            <H5Card>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </H5Card>
            <Button
              onClick={() => {
                console.log("Click");
              }}
            >
              Click me
            </Button>
          </Card>
          <Card>
            <BoxImage>
              <ImageCard src="image4.jpg" alt="this img" />
            </BoxImage>
            <H3Card>Lorem ipsum dolor sit amet</H3Card>
            <H5Card>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </H5Card>
            <Button
              onClick={() => {
                console.log("Click");
              }}
            >
              Click me
            </Button>
          </Card>
        </DivBox>
      </Main>
      <DivAboutUs>
        <Main>
          <BoxAboutUs>
            <H2Card>Lorem ipsum dolor sit.</H2Card>
            <TitleP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil voluptates itaque iure cum
              quibusdam modi, doloribus vero explicabo exercitationem,
              asperiores amet quisquam dolore, voluptatum aliquam nobis
              blanditiis! Eveniet ex nam laudantium omnis sequi! Placeat
              reprehenderit autem quia laudantium quasi! Quos asperiores amet
              vitae quibusdam neque ad voluptate modi nobis autem, alias iusto
              sit. Odit earum dicta et. Animi amet vel error quo nesciunt
              inventore dolorem, quasi cum neque quis incidunt doloribus
              deserunt molestiae voluptatibus temporibus labore aspernatur
              commodi. Modi quibusdam facilis incidunt officia laborum
              architecto sint tenetur saepe porro dolore, ut itaque ipsum
              cumque. Fuga placeat illo explicabo eum distinctio voluptates in,
              doloribus inventore hic harum laboriosam amet, ipsam nesciunt
              commodi dolores accusantium illum? Tempore, libero soluta.
              Corporis, molestias provident, hic officia delectus quis alias
              recusandae fuga illo adipisci est sapiente perferendis blanditiis
              deleniti at dolor minima excepturi voluptas saepe qui harum ab
              quam! Animi ipsum deserunt dignissimos illum saepe accusantium
              totam. Sint minus mollitia, amet cumque animi magni est ea ad illo
              tenetur, odit at soluta facilis? Deleniti porro odit accusamus,
              officiis aspernatur nostrum pariatur delectus blanditiis fugiat
              ipsum ea officia suscipit nulla quia fuga ut soluta et rerum non
              cupiditate sequi. Ipsum reiciendis repellendus molestias delectus
              cumque minima.
            </TitleP>
          </BoxAboutUs>
        </Main>
      </DivAboutUs>
    </div>
  );
}
export default PageTwo;
