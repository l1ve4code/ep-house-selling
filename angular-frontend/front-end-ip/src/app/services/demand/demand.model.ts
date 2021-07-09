export interface Demand {
  id?: number;
  object_type: string;
  kolvo_etashei_ot: number;
  kolvo_etashei_do: number;
  etash_ot: number;
  etash_do: number;
  kolvo_komnat_ot: number;
  kolvo_komnat_do: number;
  ploshad_ot: number;
  ploshad_do: number;
  stoimost_ot: number;
  stoimost_do: number;
  actualnost: boolean;
  id_rayona: number;
  id_goroda: number;
  id_client: number;
}
