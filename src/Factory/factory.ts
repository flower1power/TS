interface IInsurance {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

class TFTInsurance implements IInsurance {
  id: number;
  status: string;

  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();

    return res.ok;
  }
}

class ABInsurance implements IInsurance {
  id: number;
  status: string;

  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();

    return res.ok;
  }
}

abstract class InsuranceFactory {
  bd: any;

  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.bd.save(ins.id, ins.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  override createInsurance(): TFTInsurance {
    return new TFTInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  override createInsurance(): ABInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFac = new TFInsuranceFactory();
const ins = tfInsuranceFac.createInsurance();
tfInsuranceFac.saveHistory(ins);

const INSURANCE_TYPE = {
  tf: TFTInsurance,
  ab: ABInsurance,
};

type IT2 = typeof INSURANCE_TYPE;

class InsuranceFactory2 {
  bd: any;

  createInsurance<T extends keyof IT2>(type: T): IT2[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(ins: IInsurance) {
    this.bd.save(ins.id, ins.status);
  }
}

const fab = new InsuranceFactory2();
const ab = fab.createInsurance('ab');
const aa = new ab();
fab.saveHistory(aa);
