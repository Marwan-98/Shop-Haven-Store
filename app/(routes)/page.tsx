import React from "react";

import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const billboard = await getBillboard("54e88f6e-8fbe-4600-a7ff-7db79e119bca");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      </div>
    </Container>
  );
};

export default HomePage;
