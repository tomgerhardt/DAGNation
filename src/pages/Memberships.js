import React from 'react';

import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import StructureDiv from '../components/__structures/StructureDiv';
import StructuresCustom2 from '../components-custom/StructuresCustom2';

export default function Memberships() {
  return (
    <React.Fragment>
      <HorizontalNavsCustom1 />

      <StructureDiv bucket1={[<StructuresCustom2 />]} />
    </React.Fragment>
  );
}

