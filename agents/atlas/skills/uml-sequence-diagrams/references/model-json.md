# Model-JSON: schema voor `build.mjs`

Eén JSON-bestand per diagram is de **enige bron van waarheid**. `node scripts/build.mjs model.json --md X.md --html Y.html` genereert hieruit zowel het `.md`-bestand (Mermaid + tabellen) als het interactieve `.html`. Daardoor zijn beide altijd exact gelijk. Bewerk nooit de gegenereerde bestanden, pas de JSON aan en draai het script opnieuw. Het script weigert een model met verwijzingen naar niet-bestaande klassen/deelnemers of relaties zonder `description`.

## kind: "class" (domeinmodel en ontwerpklassendiagram)

```json
{
  "kind": "class",
  "title": "Design class diagram – Payments",
  "description": "Short explanation of what this diagram shows.",
  "groups": [
    {
      "namespace": "App\\Services\\Payments",
      "classes": [
        {
          "name": "PaymentService",
          "stereotype": "service",
          "pattern": "Facade",
          "grasp": "Controller (use-case controller) · Low Coupling",
          "description": "What this class does and why it exists.",
          "attributes": ["-provider: PaymentProvider"],
          "methods": ["+pay(order: Order): Payment"]
        }
      ]
    }
  ],
  "relations": [
    {
      "from": "PaymentService", "to": "PaymentProvider",
      "type": "association",
      "multiplicity": "1:*",
      "label": "uses",
      "description": "Required. Explain why this relation exists."
    }
  ]
}
```

- `stereotype`: `controller | service | entity | value-object | repository | interface | abstract | enum | dto | event | listener | job` (of eigen term). `interface` en `abstract` worden als Mermaid-stereotype getoond.
- `type`: `inheritance | realization | composition | aggregation | association | dependency`. Richting is altijd `from` = de klasse die de relatie "heeft": kind → ouder (inheritance), implementatie → interface (realization), geheel → deel (composition/aggregation), gebruiker → gebruikte (association/dependency).
- `multiplicity`: `"vanKant:naarKant"` (bijv. `"1:*"`, `"1:0..1"`) of één waarde voor de `to`-kant.
- Namespaces zijn de groepering in diagram en viewer. Gebruik de echte namespaces van het framework (e.g. `App\Http\Controllers`, `App\Services`, `App\Models`) or, for the domain model, the domain areas (`Ordering`, `Payments`) — always in English.

## kind: "er" (database)

Zelfde `groups`/`relations`, maar met `tables` i.p.v. `classes`:

```json
{
  "kind": "er",
  "title": "Database model",
  "groups": [{
    "namespace": "Orders",
    "tables": [{
      "name": "orders",
      "description": "An order placed by a customer.",
      "columns": [
        {"name": "id", "type": "bigint", "pk": true, "note": "auto-increment"},
        {"name": "customer_id", "type": "bigint", "fk": "customers.id"},
        {"name": "status", "type": "varchar(20)", "note": "enum: open|paid|cancelled"},
        {"name": "paid_at", "type": "timestamp", "nullable": true}
      ],
      "indexes": ["idx_orders_customer_id (customer_id)", "UNIQUE uq_orders_number (number)"]
    }]
  }],
  "relations": [
    {"from": "customers", "to": "orders", "multiplicity": "1:N", "label": "places",
     "description": "A customer has zero or more orders. FK orders.customer_id, ON DELETE RESTRICT."}
  ]
}
```

`multiplicity` voor ER: `1:1 | 1:0..1 | 1:N | 1:1..N | N:M | 0..1:N`. Een N:M-relatie krijgt altijd een eigen koppeltabel in het model; teken die expliciet.

## kind: "sequence" (sequentiediagrammen)

Eén bestand kan meerdere use cases bevatten; de viewer toont een keuzelijst.

```json
{
  "kind": "sequence",
  "title": "Sequence diagrams",
  "sequences": [{
    "title": "UC-03 Check out order",
    "description": "Main scenario plus the most important alternatives.",
    "participants": [
      {"id": "cu", "name": "Customer"},
      {"id": "c", "name": "CheckoutController"},
      {"id": "s", "name": "CheckoutService"}
    ],
    "steps": [
      {"from": "cu", "to": "c", "label": "POST /checkout", "detail": "What happens here and why."},
      {"from": "c", "to": "s", "label": "checkout(order)"},
      {"type": "alt", "label": "payment succeeded"},
      {"from": "s", "to": "c", "type": "return", "label": "Payment"},
      {"type": "else", "label": "payment failed"},
      {"from": "s", "to": "c", "type": "return", "label": "PaymentFailed"},
      {"type": "end"}
    ]
  }]
}
```

- `type`: `call` (standaard) · `return` · `async` · `note` (alleen `from`) · fragmenten `alt | else | opt | loop | end`.
- Zet in `detail` per belangrijk bericht de toelichting; die verschijnt bij klikken in de viewer en in een tabel in het `.md`-bestand.
- Deelnemers in een sequentiediagram van de ontwerpfase zijn de klassen uit het klassendiagram; in de modelleerfase zijn het actoren/domeinconcepten.
