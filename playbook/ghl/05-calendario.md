# GHL 05 — Calendário: Agendamento do Closer

**Objetivo:** link de agendamento do Closer funcionando, sincronizado com o Google Calendar, com lembretes anti no-show.
**Pré-requisitos:** módulos 01 e 04; conta Google do Closer.
**Tempo estimado:** 45 min.

O calendário do GHL não é só agenda: quando alguém marca, ele **cria/atualiza o contato, registra o agendamento na oportunidade e dispara workflows** (lembretes, no-show). Trate como parte do funil, não como Calendly avulso.

## 1. Conectar o Google Calendar do Closer

1. Subconta → **Settings → My Profile → Calendar Settings** (logado como o Closer) → **Connect** no Google Calendar → autorize.
2. Configure a sincronização bidirecional: eventos existentes do Google **bloqueiam** horários no GHL (impede agendamento duplo) e agendamentos do GHL aparecem no Google.

## 2. Criar o calendário de reunião comercial

1. **Calendars → Calendar Settings → + Create Calendar** → tipo **Round Robin/Simple (appointment)**.
2. Configuração:

| Campo | Valor Sommar |
|---|---|
| Nome | `Reunião de Simulação — Sommar Capital` |
| Descrição | "Apresentação da sua simulação personalizada de consórcio (20–30 min, por vídeo ou telefone)." |
| Duração | 30 min |
| Buffer após | 15 min (anotações no CRM entre calls) |
| Máx./dia | 6 (protege tempo de follow-up e faturamento) |
| Antecedência mínima | 2h · Janela futura: 14 dias |
| Disponibilidade | Horário comercial do Closer (seg–sex; deixe 1 tarde/semana SEM slots para trabalho interno) |
| Local da reunião | Google Meet (gerado automático) + opção telefone |
| Membro | Closer (Gabriel) |

3. **Forms & Payment → formulário de agendamento:** peça só Nome, Telefone/WhatsApp e uma pergunta: *"O que você quer resolver nessa conversa?"* (aquece a call e confirma o Need). Não adicione mais campos — cada campo extra derruba a taxa de agendamento; a qualificação pesada já foi feita pelo SDR.
4. **Notifications:** ative confirmação por e-mail; os lembretes por WhatsApp ficam no workflow W5 ([módulo 06](06-workflows.md)) — desative SMS nativo para não duplicar.
5. Copie o **link de agendamento** (Share) e salve — o SDR e o chatbot usarão este link.

## 3. Política anti no-show (o que reduz falta de verdade)

- Lembrete 24h antes + 1h antes por WhatsApp (workflow W5).
- No lembrete de 24h, **pedir confirmação ativa**: "Confirma nossa conversa de amanhã às {{hora}}? 👍" — quem não confirma recebe ligação do SDR.
- No-show acontece mesmo assim: workflow marca a oportunidade com tarefa de reagendamento no mesmo dia (não deixar esfriar).

## ✅ Teste de validação do módulo

- [ ] Abra o link de agendamento em aba anônima e marque um horário-teste → o agendamento aparece no calendário do GHL **e** no Google Calendar do Closer.
- [ ] Um evento pessoal criado direto no Google bloqueia o horário correspondente no link público.
- [ ] O contato-teste do agendamento foi criado em Contacts com a resposta da pergunta de qualificação visível.
- [ ] Cancele o teste ao final.

**Próximo módulo:** [06 — Workflows](06-workflows.md).

## Fontes

- [Getting Started — Setup A Booking Calendar (portal oficial)](https://help.gohighlevel.com/support/solutions/articles/155000005061-getting-started-setup-a-booking-calendar) · [Calendars & Appointments — índice oficial](https://help.gohighlevel.com/support/solutions/48000449585) · [Guia prático de calendários GHL](https://thefunnelsguys.com/a-guide-to-gohighlevel-calendars-2025-setup-schedule-features-best-appointment-practices/)
