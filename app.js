/**
 * FGV RECURSOS - LÓGICA DE INTERAÇÃO, NAVEGAÇÃO E PERSISTÊNCIA REAL
 * Desenvolvido seguindo fielmente os fluxos de telas 1 a 7 (Aluno) e Professor.
 */

(function () {
  'use strict';

  // Chave de armazenamento no LocalStorage
  const STORAGE_KEY = 'fgv_recursos_simulation_v4';

  // Texto padrão do mockup da FGV
  const DEFAULT_RECURSO_TEXT = 'Peço revisão da questão, acredito que o texto foi mal elaborado e de difícil compreensão.';

  function getInitialStudents() {
    return [
      {
        id: 'carlos-eduardo',
        name: 'Carlos Eduardo M.',
        matricula: '2024.1.0984',
        avatar: 'AL',
        questions: [
          {
            id: 'q1',
            number: 1,
            title: 'Questão 1',
            statement: 'Em relação aos conceitos fundamentais de macroeconomia e políticas de estabilização monetária, assinale a alternativa que descreve a curva de Phillips no longo prazo.',
            studentChoice: 'Curva positivamente inclinada com expectativas adaptativas',
            officialChoice: 'Curva vertical no nível de desemprego natural',
            fundamentacao: 'Solicito revisão da questão devido à ambiguidade na interpretação do modelo clássico e novo-keynesiano no longo prazo.',
            parecer: 'A banca considerou improcedente a alegação, tendo em vista a uniformidade da bibliografia indicada no plano de ensino.',
            status: 'indeferido' // 'em_analise' | 'deferido' | 'indeferido'
          },
          {
            id: 'q2',
            number: 2,
            title: 'Questão 2',
            statement: 'Sobre a estrutura do Sistema Financeiro Nacional e as diretrizes do Banco Central do Brasil para operações cambiais:',
            studentChoice: 'Competência do Banco Central sob diretrizes do CMN',
            officialChoice: 'Competência do Banco Central sob diretrizes do CMN',
            fundamentacao: 'Houve divergência na pontuação atribuída pelo sistema na leitura do gabarito preliminar.',
            parecer: 'Recurso acolhido. Constatado erro material na leitura ótica da folha de respostas.',
            status: 'deferido'
          },
          {
            id: 'q4',
            number: 4,
            title: 'Questão 4',
            statement: 'Na palestra, o professor Paulo Artaxo menciona a estabilidade da temperatura na era do Holoceno, época atual, iniciada há cerca de 12 mil anos. Entretanto, dado o impacto ambiental da ação humana, o professor apresenta uma nova era. Como ela se chama?',
            studentChoice: 'Antropoceno',
            officialChoice: 'Mesozoica',
            fundamentacao: DEFAULT_RECURSO_TEXT,
            parecer: 'A banca examinou a questão e constatou que a redação está de acordo com a bibliografia indicada no programa de estudos.',
            status: 'em_analise' // Sincronizado dinamicamente com o fluxo do aluno!
          }
        ]
      },
      {
        id: 'carlos-santos',
        name: 'Carlos Santos',
        matricula: '2024.1.0312',
        avatar: 'CS',
        questions: [
          {
            id: 'cs-q1',
            number: 1,
            title: 'Questão 1',
            statement: 'Princípios fundamentais do Direito Administrativo aplicados aos contratos de concessão pública.',
            studentChoice: 'Princípio da Continuidade do Serviço',
            officialChoice: 'Princípio da Autotutela',
            fundamentacao: 'Peço anulação da questão por duplicidade de interpretação na jurisprudência recente do STJ citada em aula.',
            parecer: 'Recurso deferido. Questão anulada para todos os candidatos.',
            status: 'deferido'
          },
          {
            id: 'cs-q2',
            number: 2,
            title: 'Questão 2',
            statement: 'Cálculo atuarial e taxas de juros compostas aplicadas a planos de previdência complementar fechada.',
            studentChoice: 'Opção C (8,4% a.a.)',
            officialChoice: 'Opção D (9,2% a.a.)',
            fundamentacao: 'Houve erro de arredondamento no enunciado que comprometeu o resultado final.',
            parecer: 'Em análise pelo professor titular.',
            status: 'em_analise'
          }
        ]
      },
      {
        id: 'felipe-kapros',
        name: 'Felipe Kapros',
        matricula: '2024.1.0558',
        avatar: 'FK',
        questions: [
          {
            id: 'fk-q1',
            number: 1,
            title: 'Questão 1',
            statement: 'Análise de balanço e liquidez corrente em empresas de capital aberto segundo normas IFRS.',
            studentChoice: 'Liquidez seca superior a 1,5',
            officialChoice: 'Liquidez corrente igual a 2,0',
            fundamentacao: 'Critério adotado pela banca diverge das normas contábeis IFRS vigentes no exercício 2025/2026.',
            parecer: 'Recurso indeferido. A questão especificava o critério tradicional da FGV.',
            status: 'indeferido'
          },
          {
            id: 'fk-q2',
            number: 2,
            title: 'Questão 2',
            statement: 'Tributação sobre o lucro real e diferimento fiscal de prejuízos acumulados.',
            studentChoice: 'Alíquota efetiva de 34%',
            officialChoice: 'Alíquota básica de 15% + adicional',
            fundamentacao: 'Solicito revisão com base no art. 222 do RIR.',
            parecer: '',
            status: 'em_analise'
          }
        ]
      },
      {
        id: 'alex-kapros',
        name: 'Alex Kapros',
        matricula: '2024.1.0779',
        avatar: 'AK',
        questions: [
          {
            id: 'ak-q1',
            number: 1,
            title: 'Questão 1',
            statement: 'Legislação tributária municipal e hipóteses de incidência do Imposto Sobre Serviços (ISSQN).',
            studentChoice: 'Local da prestação do serviço',
            officialChoice: 'Estabelecimento prestador',
            fundamentacao: 'A Lei Complementar 116 define claramente a exceção para o serviço de construção civil.',
            parecer: '',
            status: 'em_analise'
          },
          {
            id: 'ak-q2',
            number: 2,
            title: 'Questão 2',
            statement: 'Direito do Consumidor e inversão do ônus da prova no processo civil.',
            studentChoice: 'Regra de julgamento',
            officialChoice: 'Regra de procedimento',
            fundamentacao: 'Jurisprudência do STJ considera regra de instrução.',
            parecer: 'Deferido. Gabarito alterado para alternativa C.',
            status: 'deferido'
          }
        ]
      }
    ];
  }

  // Função geradora de estado inicial para garantir imutabilidade
  function getInitialState() {
    return {
      activeFlow: 'student',          // 'student' | 'professor'
      currentStep: 1,                 // 1 a 7 conforme mockups
      hasResource: true,              // por padrão já possui recurso para testes
      resourceText: DEFAULT_RECURSO_TEXT,
      submissionDate: '24/09/2026 às 14:22',
      isDeadlineExpired: false,       // true = após os 2 dias (Tela 7)
      professorStatus: 'em_analise',  // 'em_analise' | 'deferido' | 'indeferido'
      professorFeedback: 'A banca examinou a questão e constatou que a redação está de acordo com a bibliografia indicada no programa de estudos.',
      
      // Sub-estado do Professor
      profSubView: 'dashboard',       // 'dashboard' | 'exam_context' | 'student_detail'
      selectedStudentId: 'carlos-eduardo',
      selectedQuestionIndex: 2,       // Começa na Questão 4 do Carlos Eduardo
      profViewMode: 'single',         // 'single' | 'all'
      profSearch: '',
      profAnalyticsOpen: false,       // toggle para exibir gráficos
      students: getInitialStudents()
    };
  }

  // Estado padrão da aplicação
  const DEFAULT_STATE = getInitialState();

  // Instância do Estado Reativo
  let appState = loadState();

  // Elementos do DOM
  const dom = {
    // Seletor de Fluxos
    btnFlowStudent: document.getElementById('btn-flow-student'),
    btnFlowProfessor: document.getElementById('btn-flow-professor'),
    flowStudentView: document.getElementById('flow-student-view'),
    flowProfessorView: document.getElementById('flow-professor-view'),
    studentStepper: document.getElementById('student-stepper'),
    stepChips: document.querySelectorAll('.step-chip'),
    
    // Controles de Simulação
    btnToggleDeadline: document.getElementById('btn-toggle-deadline'),
    deadlinePillText: document.getElementById('deadline-pill-text'),
    btnResetData: document.getElementById('btn-reset-data'),

    // Estados do Aluno
    stateInitial: document.getElementById('student-state-initial'),
    btnOpenResource: document.getElementById('btn-open-resource'),

    stateCompose: document.getElementById('student-state-compose'),
    btnSubmitResource: document.getElementById('btn-submit-resource'),
    btnCancelEdit: document.getElementById('btn-cancel-edit'),
    resourceInput: document.getElementById('resource-input'),
    currentCharCount: document.getElementById('current-char-count'),

    stateSubmitted: document.getElementById('student-state-submitted'),

    stateSubmittedView: document.getElementById('student-state-submitted-view'),
    submittedActionBar: document.getElementById('submitted-action-bar'),
    btnEditResource: document.getElementById('btn-edit-resource'),
    btnOpenDeleteModal: document.getElementById('btn-open-delete-modal'),
    resourceReadonlyInput: document.getElementById('resource-readonly-input'),
    submittedCharCount: document.getElementById('submitted-char-count'),

    studentReviewStatusCard: document.getElementById('student-review-status-card'),
    feedbackBadgeStatus: document.getElementById('feedback-badge-status'),
    feedbackDisplayText: document.getElementById('feedback-display-text'),

    // Modal de Exclusão (Tela 5)
    deleteModal: document.getElementById('delete-confirmation-dialog'),
    btnModalCancel: document.getElementById('btn-modal-cancel'),
    btnModalConfirmDelete: document.getElementById('btn-modal-confirm-delete'),

    // Sub-visões do Professor
    profDashboardView: document.getElementById('prof-dashboard-view'),
    profExamContextView: document.getElementById('prof-exam-context-view'),
    profStudentDetailView: document.getElementById('prof-student-detail-view'),

    // Dashboard do Professor
    dashboardTotalAbertos: document.getElementById('dashboard-total-abertos'),
    btnProfImport: document.getElementById('btn-prof-import'),
    btnProfExport: document.getElementById('btn-prof-export'),
    btnOpenExamContext: document.getElementById('btn-open-exam-context'),
    profSearchInput: document.getElementById('prof-search-input'),
    profStudentsTbody: document.getElementById('prof-students-tbody'),

    // Analytics Dashboard (Toggle & Gráficos)
    btnToggleAnalytics: document.getElementById('btn-toggle-analytics'),
    profAnalyticsDashboard: document.getElementById('prof-analytics-dashboard'),
    analyticsToggleText: document.getElementById('analytics-toggle-text'),
    statTotalRecursos: document.getElementById('stat-total-recursos'),
    statDeferidos: document.getElementById('stat-deferidos'),
    statIndeferidos: document.getElementById('stat-indeferidos'),
    statAbertos: document.getElementById('stat-abertos'),
    statFechados: document.getElementById('stat-fechados'),
    statAlunos: document.getElementById('stat-alunos'),
    donutSegmentDeferidos: document.getElementById('donut-segment-deferidos'),
    donutSegmentIndeferidos: document.getElementById('donut-segment-indeferidos'),
    donutSegmentAbertos: document.getElementById('donut-segment-abertos'),
    donutCenterTotal: document.getElementById('donut-center-total'),
    legendQtyDeferidos: document.getElementById('legend-qty-deferidos'),
    legendPctDeferidos: document.getElementById('legend-pct-deferidos'),
    legendQtyIndeferidos: document.getElementById('legend-qty-indeferidos'),
    legendPctIndeferidos: document.getElementById('legend-pct-indeferidos'),
    legendQtyAbertos: document.getElementById('legend-qty-abertos'),
    legendPctAbertos: document.getElementById('legend-pct-abertos'),
    barLabelTotal: document.getElementById('bar-label-total'),
    barFillTotal: document.getElementById('bar-fill-total'),
    barLabelFechados: document.getElementById('bar-label-fechados'),
    barFillFechados: document.getElementById('bar-fill-fechados'),
    barLabelAbertos: document.getElementById('bar-label-abertos'),
    barFillAbertos: document.getElementById('bar-fill-abertos'),
    barLabelDeferidos: document.getElementById('bar-label-deferidos'),
    barFillDeferidos: document.getElementById('bar-fill-deferidos'),
    barLabelIndeferidos: document.getElementById('bar-label-indeferidos'),
    barFillIndeferidos: document.getElementById('bar-fill-indeferidos'),

    // Contexto da Prova (FGV Conhecimento)
    btnPortalGoRecursos: document.getElementById('btn-portal-go-recursos'),

    // Detalhe do Aluno Selecionado
    btnDetailBack: document.getElementById('btn-detail-back'),
    btnDetailImport: document.getElementById('btn-detail-import'),
    btnDetailExport: document.getElementById('btn-detail-export'),
    detailTotalAbertos: document.getElementById('detail-total-abertos'),
    detailTotalFechados: document.getElementById('detail-total-fechados'),
    detailStudentAvatar: document.getElementById('detail-student-avatar'),
    detailStudentName: document.getElementById('detail-student-name'),
    detailStudentMeta: document.getElementById('detail-student-meta'),

    // Modos de Visualização de Questões
    btnModeSingle: document.getElementById('btn-mode-single'),
    btnModeAll: document.getElementById('btn-mode-all'),
    profSingleQuestionWrapper: document.getElementById('prof-single-question-wrapper'),
    profAllQuestionsWrapper: document.getElementById('prof-all-questions-wrapper'),

    // Questão Única
    singleQuestionTitle: document.getElementById('single-question-title'),
    singleQuestionStatusTag: document.getElementById('single-question-status-tag'),
    singleQuestionStatement: document.getElementById('single-question-statement'),
    singleStudentChoice: document.getElementById('single-student-choice'),
    singleOfficialChoice: document.getElementById('single-official-choice'),
    singleStudentFundamentacao: document.getElementById('single-student-fundamentacao'),
    singleProfFeedback: document.getElementById('single-prof-feedback'),
    btnSingleDeferir: document.getElementById('btn-single-deferir'),
    btnSingleIndeferir: document.getElementById('btn-single-indeferir'),
    btnSingleSaveFeedback: document.getElementById('btn-single-save-feedback'),
    btnQuestionPrev: document.getElementById('btn-question-prev'),
    btnQuestionNext: document.getElementById('btn-question-next'),
    singleEvaluationLockedNotice: document.getElementById('single-evaluation-locked-notice'),
    singleLockedNoticeText: document.getElementById('single-locked-notice-text'),

    // Todas as Questões
    allQuestionsList: document.getElementById('all-questions-list'),

    // Modal de Confirmação Definitiva de Julgamento do Professor
    profDecisionDialog: document.getElementById('prof-decision-dialog'),
    profModalIconBadge: document.getElementById('prof-modal-icon-badge'),
    profModalStudentName: document.getElementById('prof-modal-student-name'),
    profModalQuestionTitle: document.getElementById('prof-modal-question-title'),
    profModalDecisionBadge: document.getElementById('prof-modal-decision-badge'),
    profModalFeedbackPreview: document.getElementById('prof-modal-feedback-preview'),
    btnProfModalCancel: document.getElementById('btn-prof-modal-cancel'),
    btnProfModalConfirm: document.getElementById('btn-prof-modal-confirm'),

    // Toast
    toast: document.getElementById('toast-notification'),
    toastMsg: document.getElementById('toast-message')
  };

  // Estado pendente de decisão para o modal do professor
  let pendingProfessorDecision = null;

  // Timer para transição suave automática da Tela 3 para a Tela 4
  let autoAdvanceTimer = null;

  /* ===================================================================
     PERSISTÊNCIA LOCALSTORAGE
     =================================================================== */
  function loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return Object.assign({}, getInitialState(), parsed);
      }
    } catch (e) {
      console.warn('Erro ao carregar localStorage:', e);
    }
    return getInitialState();
  }

  function saveState() {
    try {
      // Sincroniza a Questão 4 do Carlos Eduardo com o estado do fluxo do aluno
      const ce = appState.students.find(s => s.id === 'carlos-eduardo');
      if (ce) {
        const q4 = ce.questions.find(q => q.number === 4);
        if (q4) {
          q4.fundamentacao = appState.resourceText || DEFAULT_RECURSO_TEXT;
          q4.parecer = appState.professorFeedback || '';
          q4.status = appState.professorStatus || 'em_analise';
        }
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn('Erro ao salvar localStorage:', e);
    }
  }

  /* ===================================================================
     NOTIFICAÇÃO TOAST
     =================================================================== */
  let toastTimer = null;
  function showToast(message) {
    if (!dom.toast || !dom.toastMsg) return;
    dom.toastMsg.textContent = message;
    dom.toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      dom.toast.classList.remove('visible');
    }, 3200);
  }

  /* ===================================================================
     RENDERIZAÇÃO PRINCIPAL DO FLUXO DO ALUNO (Telas 1 a 7)
     =================================================================== */
  function renderStudentStep(step) {
    appState.currentStep = step;
    saveState();

    // Atualiza chips do stepper no cabeçalho
    dom.stepChips.forEach(chip => {
      const chipStep = parseInt(chip.dataset.step, 10);
      chip.classList.toggle('active', chipStep === step);
    });

    // Oculta todos os blocos de estado do aluno
    dom.stateInitial.classList.add('hidden');
    dom.stateCompose.classList.add('hidden');
    dom.stateSubmitted.classList.add('hidden');
    dom.stateSubmittedView.classList.add('hidden');

    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = null;
    }

    switch (step) {
      case 1:
        dom.stateInitial.classList.remove('hidden');
        break;

      case 2:
        dom.stateCompose.classList.remove('hidden');
        dom.btnCancelEdit.classList.add('hidden');
        dom.btnSubmitResource.textContent = 'Enviar';
        dom.resourceInput.value = appState.resourceText || DEFAULT_RECURSO_TEXT;
        updateCharCount(dom.resourceInput.value);
        setTimeout(() => dom.resourceInput.focus(), 50);
        break;

      case 3:
        dom.stateSubmitted.classList.remove('hidden');
        autoAdvanceTimer = setTimeout(() => {
          renderStudentStep(4);
        }, 3500);
        break;

      case 4:
        dom.stateSubmittedView.classList.remove('hidden');
        dom.submittedActionBar.classList.remove('hidden');
        dom.resourceReadonlyInput.value = appState.resourceText || DEFAULT_RECURSO_TEXT;
        dom.submittedCharCount.textContent = (appState.resourceText || DEFAULT_RECURSO_TEXT).length;
        renderProfessorFeedbackCallout();
        updateStudentStatusTag();
        break;

      case 5:
        dom.stateSubmittedView.classList.remove('hidden');
        dom.submittedActionBar.classList.remove('hidden');
        dom.resourceReadonlyInput.value = appState.resourceText || DEFAULT_RECURSO_TEXT;
        dom.submittedCharCount.textContent = (appState.resourceText || DEFAULT_RECURSO_TEXT).length;
        renderProfessorFeedbackCallout();
        openDeleteModal();
        break;

      case 6:
        dom.stateCompose.classList.remove('hidden');
        dom.btnCancelEdit.classList.remove('hidden');
        dom.btnSubmitResource.textContent = 'Salvar alterações';
        dom.resourceInput.value = appState.resourceText || DEFAULT_RECURSO_TEXT;
        updateCharCount(dom.resourceInput.value);
        setTimeout(() => {
          dom.resourceInput.focus();
          dom.resourceInput.setSelectionRange(dom.resourceInput.value.length, dom.resourceInput.value.length);
        }, 50);
        break;

      case 7:
        dom.stateSubmittedView.classList.remove('hidden');
        dom.submittedActionBar.classList.add('hidden'); // Oculta botões Editar e Excluir
        dom.resourceReadonlyInput.value = appState.resourceText || DEFAULT_RECURSO_TEXT;
        dom.submittedCharCount.textContent = (appState.resourceText || DEFAULT_RECURSO_TEXT).length;
        renderProfessorFeedbackCallout();
        updateStudentStatusTag(); // MANTÉM label para o aluno acompanhar o status
        break;

      default:
        renderStudentStep(1);
        break;
    }
  }

  /* ===================================================================
     RENDERIZAÇÃO DO STATUS DO RECURSO (Tag do Aluno - Removida)
     =================================================================== */
  function updateStudentStatusTag() {
    // Status acima do textarea removido do fluxo do aluno
  }

  /* ===================================================================
     RENDERIZAÇÃO DO PARECER DO PROFESSOR NO CARD DO ALUNO
     =================================================================== */
  function renderProfessorFeedbackCallout() {
    if (!dom.studentReviewStatusCard) return;

    dom.studentReviewStatusCard.classList.remove('hidden');

    if (appState.professorStatus === 'deferido') {
      dom.feedbackBadgeStatus.textContent = 'Recurso Deferido (Aceito)';
      dom.feedbackBadgeStatus.className = 'feedback-badge deferido';
      dom.feedbackDisplayText.classList.remove('hidden');
      dom.feedbackDisplayText.textContent = appState.professorFeedback || 'A banca examinou a questão e deferiu o recurso, pontuação atribuída.';
    } else if (appState.professorStatus === 'indeferido') {
      dom.feedbackBadgeStatus.textContent = 'Recurso Indeferido (Recusado)';
      dom.feedbackBadgeStatus.className = 'feedback-badge indeferido';
      dom.feedbackDisplayText.classList.remove('hidden');
      dom.feedbackDisplayText.textContent = appState.professorFeedback || 'A banca examinou a questão e manteve o gabarito oficial.';
    } else {
      dom.feedbackBadgeStatus.textContent = 'Status: Em Análise';
      dom.feedbackBadgeStatus.className = 'feedback-badge em-analise';
      // Em análise: esconde o texto do feedback pois ainda não foi avaliado pela banca
      dom.feedbackDisplayText.classList.add('hidden');
      dom.feedbackDisplayText.textContent = '';
    }
  }

  /* ===================================================================
     CONTADOR DE CARACTERES DINÂMICO
     =================================================================== */
  function updateCharCount(text) {
    const len = text ? text.length : 0;
    if (dom.currentCharCount) {
      dom.currentCharCount.textContent = len;
    }
  }

  /* ===================================================================
     ALTERNAÇÃO DE FLUXOS (Aluno vs Professor)
     =================================================================== */
  function switchFlow(flowName) {
    appState.activeFlow = flowName;
    saveState();

    if (flowName === 'student') {
      dom.btnFlowStudent.classList.add('active');
      dom.btnFlowProfessor.classList.remove('active');
      dom.flowStudentView.classList.add('active');
      dom.flowProfessorView.classList.remove('active');
      dom.studentStepper.style.display = 'flex';
      renderStudentStep(appState.currentStep);
    } else {
      dom.btnFlowStudent.classList.remove('active');
      dom.btnFlowProfessor.classList.add('active');
      dom.flowStudentView.classList.remove('active');
      dom.flowProfessorView.classList.add('active');
      dom.studentStepper.style.display = 'none';
      switchProfessorSubView(appState.profSubView || 'dashboard');
    }
  }

  /* ===================================================================
     MODAL DE EXCLUSÃO (Tela 5)
     =================================================================== */
  function openDeleteModal() {
    if (dom.deleteModal) {
      if (typeof dom.deleteModal.showModal === 'function') {
        dom.deleteModal.showModal();
      } else {
        dom.deleteModal.setAttribute('open', '');
      }
    }
  }

  function closeDeleteModal() {
    if (dom.deleteModal) {
      if (typeof dom.deleteModal.close === 'function') {
        dom.deleteModal.close();
      } else {
        dom.deleteModal.removeAttribute('open');
      }
    }
  }

  /* ===================================================================
     FLUXO DO PROFESSOR: SUB-VISÕES
     =================================================================== */
  function switchProfessorSubView(viewName) {
    appState.profSubView = viewName;
    saveState();

    dom.profDashboardView.classList.toggle('active', viewName === 'dashboard');
    dom.profDashboardView.classList.toggle('hidden', viewName !== 'dashboard');

    dom.profExamContextView.classList.toggle('active', viewName === 'exam_context');
    dom.profExamContextView.classList.toggle('hidden', viewName !== 'exam_context');

    dom.profStudentDetailView.classList.toggle('active', viewName === 'student_detail');
    dom.profStudentDetailView.classList.toggle('hidden', viewName !== 'student_detail');

    if (viewName === 'dashboard') {
      renderProfessorDashboard();
    } else if (viewName === 'student_detail') {
      renderStudentDetail(appState.selectedStudentId);
    }
  }

  /* ===================================================================
     DASHBOARD DO PROFESSOR: TABELA DE ALUNOS & KPIS
     =================================================================== */
  function getStudentStats(student) {
    let total = student.questions ? student.questions.length : (student.totalResources || 0);
    let open = 0;
    let answered = 0;

    if (student.questions && student.questions.length > 0) {
      student.questions.forEach(q => {
        if (q.status === 'em_analise' || q.status === 'aberto') {
          open++;
        } else {
          answered++;
        }
      });
      // Ajuste para números do mockup (se definidos explicitamente)
      if (student.totalResources) total = student.totalResources;
      if (student.responded) answered = student.responded;
      if (student.open) open = student.open;
    } else {
      open = student.open || 0;
      answered = student.responded || 0;
    }

    return { total, open, answered };
  }

  function renderProfessorDashboard() {
    // 1. Sincroniza Carlos Eduardo com o estado do fluxo de aluno
    const ce = appState.students.find(s => s.id === 'carlos-eduardo');
    if (ce) {
      const q4 = ce.questions.find(q => q.number === 4);
      if (q4) {
        q4.fundamentacao = appState.resourceText || DEFAULT_RECURSO_TEXT;
        q4.parecer = appState.professorFeedback || '';
        q4.status = appState.professorStatus || 'em_analise';
      }
    }

    // 2. Calcula Total Real da coluna "Qtd / recursos" para o KPI Card
    const totalRecursosReal = appState.students.reduce((acc, s) => {
      const stats = getStudentStats(s);
      return acc + stats.total;
    }, 0);
    dom.dashboardTotalAbertos.textContent = totalRecursosReal;

    // 3. Aplica Busca
    const query = (appState.profSearch || '').toLowerCase().trim();

    const filtered = appState.students.filter(student => {
      // Filtro de busca por nome ou matrícula
      if (query && !student.name.toLowerCase().includes(query) && !student.matricula.includes(query)) {
        return false;
      }
      return true;
    });

    // 4. Renderiza Linhas da Tabela
    dom.profStudentsTbody.innerHTML = '';
    if (filtered.length === 0) {
      dom.profStudentsTbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 24px; color: #94a3b8;">
            Nenhum aluno encontrado para os critérios pesquisados.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(student => {
      const stats = getStudentStats(student);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="td-aluno">${student.name}</td>
        <td class="td-center">${stats.total}</td>
        <td class="td-center">${stats.answered}</td>
        <td class="td-center">${stats.open}</td>
        <td class="td-center">
          <button type="button" class="btn-view-student" data-id="${student.id}" title="Visualizar recursos do aluno">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </td>
      `;

      tr.querySelector('.btn-view-student').addEventListener('click', () => {
        appState.selectedStudentId = student.id;
        appState.selectedQuestionIndex = 0; // Inicia na primeira questão do aluno
        if (student.id === 'carlos-eduardo') {
          appState.selectedQuestionIndex = 2; // Inicia na questão 4 no Carlos Eduardo
        }
        switchProfessorSubView('student_detail');
      });

      dom.profStudentsTbody.appendChild(tr);
    });

    // 5. Atualiza o Dashboard de Analytics & Gráficos
    renderProfessorAnalytics();
  }

  /* -------------------------------------------------------------
     RENDERIZAÇÃO: DASHBOARD DE ANALYTICS & GRÁFICOS (PIZZA + BARRAS)
     ------------------------------------------------------------- */
  function renderProfessorAnalytics() {
    if (!dom.profAnalyticsDashboard) return;

    // 1. Atualiza estado visual do painel expansível e botão de toggle
    const isOpen = Boolean(appState.profAnalyticsOpen);
    dom.profAnalyticsDashboard.classList.toggle('expanded', isOpen);
    dom.profAnalyticsDashboard.classList.toggle('collapsed', !isOpen);
    dom.profAnalyticsDashboard.setAttribute('aria-hidden', (!isOpen).toString());
    if (dom.btnToggleAnalytics) {
      dom.btnToggleAnalytics.setAttribute('aria-expanded', isOpen.toString());
    }
    if (dom.analyticsToggleText) {
      dom.analyticsToggleText.textContent = isOpen ? 'Ocultar Gráficos' : 'Exibir Gráficos';
    }

    // 2. Extrai métricas consolidadas de todos os alunos
    const students = appState.students || [];
    let totalRecursos = 0;
    let deferidos = 0;
    let indeferidos = 0;
    let abertos = 0;
    let fechados = 0;
    const totalAlunos = students.length;

    students.forEach(student => {
      (student.questions || []).forEach(q => {
        totalRecursos++;
        if (q.status === 'deferido') {
          deferidos++;
          fechados++;
        } else if (q.status === 'indeferido') {
          indeferidos++;
          fechados++;
        } else {
          abertos++;
        }
      });
    });

    // 3. Atualiza os 6 Cards de Estatísticas
    if (dom.statTotalRecursos) dom.statTotalRecursos.textContent = totalRecursos;
    if (dom.statDeferidos) dom.statDeferidos.textContent = deferidos;
    if (dom.statIndeferidos) dom.statIndeferidos.textContent = indeferidos;
    if (dom.statAbertos) dom.statAbertos.textContent = abertos;
    if (dom.statFechados) dom.statFechados.textContent = fechados;
    if (dom.statAlunos) dom.statAlunos.textContent = totalAlunos;

    // 4. Gráfico de Pizza (Donut SVG)
    // Raio r = 58 -> C = 2 * PI * 58 ≈ 364.4247
    const C = 2 * Math.PI * 58;
    const pctDeferidos = totalRecursos > 0 ? (deferidos / totalRecursos) : 0;
    const pctIndeferidos = totalRecursos > 0 ? (indeferidos / totalRecursos) : 0;
    const pctAbertos = totalRecursos > 0 ? (abertos / totalRecursos) : 0;

    const dashDeferidos = pctDeferidos * C;
    const dashIndeferidos = pctIndeferidos * C;
    const dashAbertos = pctAbertos * C;

    if (dom.donutSegmentDeferidos) {
      dom.donutSegmentDeferidos.style.strokeDasharray = `${dashDeferidos} ${C}`;
      dom.donutSegmentDeferidos.style.strokeDashoffset = '0';
    }
    if (dom.donutSegmentIndeferidos) {
      dom.donutSegmentIndeferidos.style.strokeDasharray = `${dashIndeferidos} ${C}`;
      dom.donutSegmentIndeferidos.style.strokeDashoffset = `-${dashDeferidos}`;
    }
    if (dom.donutSegmentAbertos) {
      dom.donutSegmentAbertos.style.strokeDasharray = `${dashAbertos} ${C}`;
      dom.donutSegmentAbertos.style.strokeDashoffset = `-${dashDeferidos + dashIndeferidos}`;
    }

    if (dom.donutCenterTotal) dom.donutCenterTotal.textContent = totalRecursos;

    if (dom.legendQtyDeferidos) dom.legendQtyDeferidos.textContent = deferidos;
    if (dom.legendPctDeferidos) dom.legendPctDeferidos.textContent = `${Math.round(pctDeferidos * 100)}%`;
    if (dom.legendQtyIndeferidos) dom.legendQtyIndeferidos.textContent = indeferidos;
    if (dom.legendPctIndeferidos) dom.legendPctIndeferidos.textContent = `${Math.round(pctIndeferidos * 100)}%`;
    if (dom.legendQtyAbertos) dom.legendQtyAbertos.textContent = abertos;
    if (dom.legendPctAbertos) dom.legendPctAbertos.textContent = `${Math.round(pctAbertos * 100)}%`;

    // 5. Gráfico de Barras
    const maxVal = Math.max(totalRecursos, 1);
    const updateBar = (val, labelEl, fillEl) => {
      if (labelEl) labelEl.textContent = val;
      if (fillEl) fillEl.style.height = `${Math.round((val / maxVal) * 100)}%`;
    };

    updateBar(totalRecursos, dom.barLabelTotal, dom.barFillTotal);
    updateBar(fechados, dom.barLabelFechados, dom.barFillFechados);
    updateBar(abertos, dom.barLabelAbertos, dom.barFillAbertos);
    updateBar(deferidos, dom.barLabelDeferidos, dom.barFillDeferidos);
    updateBar(indeferidos, dom.barLabelIndeferidos, dom.barFillIndeferidos);
  }

  /* ===================================================================
     AVALIAÇÃO INDIVIDUAL DO ALUNO (Telas com Paginação / Ver Todas)
     =================================================================== */
  function renderStudentDetail(studentId) {
    const student = appState.students.find(s => s.id === studentId) || appState.students[0];
    appState.selectedStudentId = student.id;

    // Header do Aluno
    dom.detailStudentAvatar.textContent = student.avatar || 'AL';
    dom.detailStudentName.textContent = `Aluno: ${student.name}`;
    dom.detailStudentMeta.textContent = `Matrícula: ${student.matricula}`;

    // Contadores de KPIs do Aluno com valores reais
    const stats = getStudentStats(student);
    dom.detailTotalAbertos.textContent = stats.open;
    dom.detailTotalFechados.textContent = stats.answered;

    // Alternador de Modos (Única vs Todas)
    dom.btnModeSingle.classList.toggle('active', appState.profViewMode === 'single');
    dom.btnModeAll.classList.toggle('active', appState.profViewMode === 'all');

    dom.profSingleQuestionWrapper.classList.toggle('active', appState.profViewMode === 'single');
    dom.profSingleQuestionWrapper.classList.toggle('hidden', appState.profViewMode !== 'single');

    dom.profAllQuestionsWrapper.classList.toggle('active', appState.profViewMode === 'all');
    dom.profAllQuestionsWrapper.classList.toggle('hidden', appState.profViewMode !== 'all');

    if (appState.profViewMode === 'single') {
      renderSingleQuestionView(student);
    } else {
      renderAllQuestionsView(student);
    }
  }

  function renderSingleQuestionView(student) {
    const questions = student.questions || [];
    if (questions.length === 0) return;

    let qIndex = appState.selectedQuestionIndex;
    if (qIndex < 0) qIndex = 0;
    if (qIndex >= questions.length) qIndex = questions.length - 1;
    appState.selectedQuestionIndex = qIndex;

    const q = questions[qIndex];

    dom.singleQuestionTitle.textContent = q.title || `Questão ${q.number || (qIndex + 1)}`;

    // Status inline na visualização de questão única (Fiel ao Mockup)
    const status = q.status || 'em_analise';
    if (dom.singleQuestionStatusTag) {
      if (status === 'deferido') {
        dom.singleQuestionStatusTag.textContent = 'DEFERIDO';
        dom.singleQuestionStatusTag.className = 'resource-status-tag deferido';
      } else if (status === 'indeferido') {
        dom.singleQuestionStatusTag.textContent = 'INDEFERIDO';
        dom.singleQuestionStatusTag.className = 'resource-status-tag indeferido';
      } else {
        dom.singleQuestionStatusTag.textContent = 'EM ANÁLISE';
        dom.singleQuestionStatusTag.className = 'resource-status-tag em-analise';
      }
    }

    dom.singleQuestionStatement.textContent = q.statement || 'Enunciado da questão avaliada.';
    dom.singleStudentChoice.textContent = q.studentChoice || 'Resposta do Aluno';
    dom.singleOfficialChoice.textContent = q.officialChoice || 'Gabarito Oficial';
    dom.singleStudentFundamentacao.textContent = q.fundamentacao || DEFAULT_RECURSO_TEXT;
    dom.singleProfFeedback.value = q.parecer || '';

    // Paginação Anterior / Próxima
    dom.btnQuestionPrev.disabled = (qIndex === 0);
    dom.btnQuestionNext.disabled = (qIndex === questions.length - 1);

    // REGRA DE NEGÓCIO: Se já deferido ou indeferido, fica disabled e com aviso
    const isEvaluated = (q.status === 'deferido' || q.status === 'indeferido');
    dom.singleProfFeedback.disabled = isEvaluated;
    dom.singleProfFeedback.readOnly = isEvaluated;
    dom.btnSingleDeferir.disabled = isEvaluated;
    dom.btnSingleIndeferir.disabled = isEvaluated;
    dom.btnSingleSaveFeedback.disabled = isEvaluated;

    if (isEvaluated && dom.singleEvaluationLockedNotice) {
      dom.singleEvaluationLockedNotice.classList.remove('hidden');
      dom.singleEvaluationLockedNotice.className = `prof-evaluation-locked-notice ${q.status}`;
      const statusTitle = q.status === 'deferido' ? 'DEFERIDO' : 'INDEFERIDO';
      if (dom.singleLockedNoticeText) {
        dom.singleLockedNoticeText.innerHTML = `<strong>Julgamento Finalizado:</strong> Recurso <strong>${statusTitle}</strong>. O parecer e a decisão foram registrados definitivamente e não podem mais ser alterados.`;
      }
    } else if (dom.singleEvaluationLockedNotice) {
      dom.singleEvaluationLockedNotice.classList.add('hidden');
    }

    // Destaque visual do status da questão no botão
    updateSingleQuestionStatusVisual(q);
  }

  function updateSingleQuestionStatusVisual(q) {
    if (q.status === 'deferido') {
      dom.btnSingleDeferir.style.boxShadow = '0 0 0 2px #ffffff, 0 0 14px rgba(22, 163, 74, 0.7)';
      dom.btnSingleIndeferir.style.boxShadow = 'none';
    } else if (q.status === 'indeferido') {
      dom.btnSingleIndeferir.style.boxShadow = '0 0 0 2px #ffffff, 0 0 14px rgba(220, 38, 38, 0.7)';
      dom.btnSingleDeferir.style.boxShadow = 'none';
    } else {
      dom.btnSingleDeferir.style.boxShadow = 'none';
      dom.btnSingleIndeferir.style.boxShadow = 'none';
    }
  }

  function renderAllQuestionsView(student) {
    const questions = student.questions || [];
    dom.allQuestionsList.innerHTML = '';

    if (questions.length === 0) {
      dom.allQuestionsList.innerHTML = '<p style="color: #94a3b8; text-align: center;">Nenhuma questão encontrada.</p>';
      return;
    }

    questions.forEach((q, idx) => {
      const isEvaluated = (q.status === 'deferido' || q.status === 'indeferido');
      const card = document.createElement('div');
      card.className = 'all-question-item-card';
      card.innerHTML = `
        <div class="all-q-header">
          <h3 class="all-q-title">${q.title || `Questão ${q.number || (idx + 1)}`}</h3>
          <span class="resource-status-tag ${q.status || 'em-analise'}">
            ${q.status === 'deferido' ? 'DEFERIDO' : (q.status === 'indeferido' ? 'INDEFERIDO' : 'EM ANÁLISE')}
          </span>
        </div>

        <div class="prof-question-context">
          <p class="question-text">${q.statement || ''}</p>
          <div class="prof-comparison-grid">
            <div class="comparison-box student-choice">
              <span class="box-caption">Resposta marcada pelo aluno:</span>
              <strong class="box-val">${q.studentChoice || ''}</strong>
            </div>
            <div class="comparison-box official-choice">
              <span class="box-caption">Gabarito da Banca:</span>
              <strong class="box-val">${q.officialChoice || ''}</strong>
            </div>
          </div>
        </div>

        <div class="prof-section-group">
          <label class="prof-group-title">Fundamentação apresentada pelo Aluno:</label>
          <div class="student-recurso-display">${q.fundamentacao || DEFAULT_RECURSO_TEXT}</div>
        </div>

        <div class="prof-section-group" style="margin-top: 14px;">
          <label class="prof-group-title">Parecer / Justificativa da Banca:</label>
          <textarea class="fgv-textarea prof-textarea all-q-feedback" ${isEvaluated ? 'disabled readonly' : ''}>${q.parecer || ''}</textarea>
        </div>

        ${isEvaluated ? `
          <div class="prof-evaluation-locked-notice ${q.status}" style="margin-top: 12px; margin-bottom: 12px;">
            <div class="locked-notice-content">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span><strong>Julgamento Finalizado:</strong> Recurso <strong>${q.status === 'deferido' ? 'DEFERIDO' : 'INDEFERIDO'}</strong>. Decisão definitiva registrada, edição bloqueada.</span>
            </div>
          </div>
        ` : ''}

        <div class="prof-action-bar">
          <div class="action-buttons-left">
            <button type="button" class="fgv-btn btn-deferir all-btn-deferir" ${isEvaluated ? 'disabled' : ''}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Deferir Recurso
            </button>
            <button type="button" class="fgv-btn btn-indeferir all-btn-indeferir" ${isEvaluated ? 'disabled' : ''}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              Indeferir Recurso
            </button>
          </div>
          <button type="button" class="fgv-btn btn-secondary all-btn-save" ${isEvaluated ? 'disabled' : ''}>Salvar Parecer</button>
        </div>
      `;

      const feedbackTextarea = card.querySelector('.all-q-feedback');
      const btnDef = card.querySelector('.all-btn-deferir');
      const btnIndef = card.querySelector('.all-btn-indeferir');
      const btnSave = card.querySelector('.all-btn-save');

      feedbackTextarea.addEventListener('input', () => {
        if (isEvaluated) return;
        q.parecer = feedbackTextarea.value;
        if (!q.status) q.status = 'em_analise';
        if (student.id === 'carlos-eduardo' && (q.number === 4 || q.id === 'q4')) {
          appState.professorFeedback = q.parecer;
          appState.professorStatus = 'em_analise';
        }
        saveState();
      });

      btnDef.addEventListener('click', () => {
        if (isEvaluated) return;
        requestProfessorDecision(student.id, idx, 'deferido', feedbackTextarea.value);
      });

      btnIndef.addEventListener('click', () => {
        if (isEvaluated) return;
        requestProfessorDecision(student.id, idx, 'indeferido', feedbackTextarea.value);
      });

      btnSave.addEventListener('click', () => {
        if (isEvaluated) return;
        const statusToKeep = q.status || 'em_analise';
        applyDecisionToQuestion(student.id, idx, statusToKeep, feedbackTextarea.value, false);
        renderAllQuestionsView(student);
        showToast('Rascunho de parecer salvo com sucesso! (Em Análise)');
      });

      dom.allQuestionsList.appendChild(card);
    });
  }

  function applyDecisionToQuestion(studentId, qIndex, status, feedbackText, showNotification = true) {
    const student = appState.students.find(s => s.id === studentId);
    if (!student || !student.questions || !student.questions[qIndex]) return;

    const q = student.questions[qIndex];
    q.status = status;
    q.parecer = feedbackText.trim();

    // Se for a Questão 4 do Carlos Eduardo, sincroniza bidirecionalmente com o fluxo do aluno
    if (student.id === 'carlos-eduardo' && (q.number === 4 || q.id === 'q4')) {
      appState.professorStatus = status;
      appState.professorFeedback = q.parecer;
      updateStudentStatusTag();
      renderProfessorFeedbackCallout();
    }

    saveState();
    if (showNotification) {
      const statusLabel = (status === 'deferido') ? 'DEFERIDO' : (status === 'indeferido' ? 'INDEFERIDO' : 'ATUALIZADO');
      showToast(`Recurso da ${q.title || 'Questão'} ${statusLabel} em definitivo!`);
    }
  }

  /* -------------------------------------------------------------
     MODAL DE CONFIRMAÇÃO DE JULGAMENTO (REGRA DE NEGÓCIO)
     ------------------------------------------------------------- */
  function requestProfessorDecision(studentId, qIndex, decision, feedbackText) {
    const student = appState.students.find(s => s.id === studentId);
    if (!student || !student.questions || !student.questions[qIndex]) return;

    const trimmedFeedback = (feedbackText || '').trim();
    if (!trimmedFeedback) {
      showToast('Por favor, redija o parecer da banca antes de julgar a questão.');
      return;
    }

    const q = student.questions[qIndex];
    pendingProfessorDecision = {
      studentId,
      qIndex,
      decision,
      feedbackText: trimmedFeedback
    };

    // Preenche dados no modal
    if (dom.profModalStudentName) dom.profModalStudentName.textContent = student.name;
    if (dom.profModalQuestionTitle) dom.profModalQuestionTitle.textContent = q.title || `Questão ${q.number || (qIndex + 1)}`;
    if (dom.profModalFeedbackPreview) dom.profModalFeedbackPreview.textContent = `"${trimmedFeedback}"`;

    if (dom.profModalDecisionBadge) {
      dom.profModalDecisionBadge.textContent = decision === 'deferido' ? 'DEFERIDO (Aceito)' : 'INDEFERIDO (Recusado)';
      dom.profModalDecisionBadge.className = `prof-decision-badge ${decision}`;
    }

    if (dom.profModalIconBadge) {
      dom.profModalIconBadge.className = `prof-modal-icon-badge ${decision}`;
    }

    if (dom.btnProfModalConfirm) {
      dom.btnProfModalConfirm.className = `modal-btn btn-confirm-decision ${decision}`;
      dom.btnProfModalConfirm.textContent = decision === 'deferido' ? 'Confirmar Deferimento' : 'Confirmar Indeferimento';
    }

    if (dom.profDecisionDialog && typeof dom.profDecisionDialog.showModal === 'function') {
      dom.profDecisionDialog.showModal();
    }
  }

  function closeProfDecisionModal() {
    if (dom.profDecisionDialog && dom.profDecisionDialog.open) {
      dom.profDecisionDialog.close();
    }
    pendingProfessorDecision = null;
  }

  /* ===================================================================
     EVENT LISTENERS & BINDINGS
     =================================================================== */
  function setupEventListeners() {
    // 1. Alternador de Fluxos Aluno / Professor
    dom.btnFlowStudent.addEventListener('click', () => switchFlow('student'));
    dom.btnFlowProfessor.addEventListener('click', () => switchFlow('professor'));

    // 2. Navegação direta pelo Stepper de Telas (1 a 7)
    dom.stepChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const targetStep = parseInt(chip.dataset.step, 10);
        renderStudentStep(targetStep);
      });
    });

    // 3. Simulação de passagem de +2 dias
    dom.btnToggleDeadline.addEventListener('click', () => {
      appState.isDeadlineExpired = !appState.isDeadlineExpired;
      if (appState.isDeadlineExpired) {
        dom.deadlinePillText.textContent = 'Prazo > 2 Dias (Expirado)';
        showToast('Simulação: Prazo de 2 dias expirado!');
        renderStudentStep(7);
      } else {
        dom.deadlinePillText.textContent = 'Simular +2 Dias';
        showToast('Simulação: Dentro do prazo de 2 dias');
        renderStudentStep(4);
      }
      saveState();
    });

    // 4. Botão Resetar Simulação
    dom.btnResetData.addEventListener('click', (e) => {
      e.preventDefault();

      // Limpa todas as chaves de simulação no localStorage
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('fgv_recursos_simulation_v1');
        localStorage.removeItem('fgv_recursos_simulation_v2');
        localStorage.removeItem('fgv_recursos_simulation_v3');
        localStorage.removeItem('fgv_recursos_simulation_v4');
      } catch (err) {
        console.warn('Erro ao limpar localStorage:', err);
      }

      // Reinicia estado reativo completamente a partir da factory
      appState = getInitialState();
      saveState();

      // Limpa qualquer timer pendente
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }

      // Restaura controles e inputs
      if (dom.deadlinePillText) dom.deadlinePillText.textContent = 'Simular +2 Dias';
      if (dom.resourceInput) {
        dom.resourceInput.value = DEFAULT_RECURSO_TEXT;
        updateCharCount(dom.resourceInput.value);
      }
      if (dom.profSearchInput) dom.profSearchInput.value = '';

      // Fecha modais se abertos
      closeDeleteModal();
      closeProfDecisionModal();

      // Atualiza ambas as visões
      renderProfessorDashboard();
      renderProfessorAnalytics();
      switchFlow('student');
      renderStudentStep(1);

      showToast('Simulação reiniciada com sucesso! Todos os dados foram restaurados.');
    });

    // 5. Tela 1 -> Clicar em "Abrir recurso"
    dom.btnOpenResource.addEventListener('click', () => {
      renderStudentStep(2);
    });

    // 6. Contador de caracteres no Textarea do Aluno
    dom.resourceInput.addEventListener('input', (e) => {
      updateCharCount(e.target.value);
    });

    // 7. Tela 2 / 6 -> Clicar em "Enviar" / "Salvar alterações"
    dom.btnSubmitResource.addEventListener('click', () => {
      const text = dom.resourceInput.value.trim();
      if (!text) {
        alert('Por favor, informe a fundamentação do seu recurso antes de enviar.');
        dom.resourceInput.focus();
        return;
      }

      const isEditing = (appState.currentStep === 6);
      appState.resourceText = text;
      appState.hasResource = true;
      appState.submissionDate = new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      
      // Sincroniza fundamentação na Questão 4 do Carlos Eduardo
      const ce = appState.students.find(s => s.id === 'carlos-eduardo');
      if (ce) {
        const q4 = ce.questions.find(q => q.number === 4);
        if (q4) q4.fundamentacao = text;
      }

      saveState();

      if (isEditing) {
        showToast('Recurso atualizado com sucesso!');
        renderStudentStep(4);
      } else {
        renderStudentStep(3); // Mostra o banner "Recurso enviado" e mensagem de 2 dias
      }
    });

    // 8. Cancelar edição (Tela 6 -> Tela 4)
    dom.btnCancelEdit.addEventListener('click', () => {
      renderStudentStep(4);
    });

    // 9. Tela 4 -> Clicar em "Editar" (vai para Tela 6)
    dom.btnEditResource.addEventListener('click', () => {
      renderStudentStep(6);
    });

    // 10. Tela 4 -> Clicar em "Excluir" (vai para Tela 5 - Modal)
    dom.btnOpenDeleteModal.addEventListener('click', () => {
      renderStudentStep(5);
    });

    // 11. Modal: Cancelar
    dom.btnModalCancel.addEventListener('click', () => {
      closeDeleteModal();
      renderStudentStep(4);
    });

    // Modal: Fechar com Escape nativo do dialog
    dom.deleteModal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeDeleteModal();
      renderStudentStep(4);
    });

    // 12. Modal: Confirmar Exclusão
    dom.btnModalConfirmDelete.addEventListener('click', () => {
      closeDeleteModal();
      appState.hasResource = false;
      appState.resourceText = DEFAULT_RECURSO_TEXT;
      appState.professorStatus = 'em_analise';
      appState.isDeadlineExpired = false;
      dom.deadlinePillText.textContent = 'Simular +2 Dias';
      saveState();
      showToast('Pedido de recurso excluído com sucesso.');
      renderStudentStep(1);
    });

    /* ===============================================================
       EVENT LISTENERS DO FLUXO DO PROFESSOR
       =============================================================== */
    // Campo de Busca
    dom.profSearchInput.addEventListener('input', (e) => {
      appState.profSearch = e.target.value;
      renderProfessorDashboard();
    });

    // Toggle do Dashboard Analítico de Gráficos
    if (dom.btnToggleAnalytics) {
      dom.btnToggleAnalytics.addEventListener('click', () => {
        appState.profAnalyticsOpen = !appState.profAnalyticsOpen;
        saveState();
        renderProfessorAnalytics();
      });
    }

    // Abrir Contexto de Prova Capitalização
    dom.btnOpenExamContext.addEventListener('click', () => {
      switchProfessorSubView('exam_context');
    });

    // Voltar da Prova Capitalização para o Dashboard
    dom.btnPortalGoRecursos.addEventListener('click', () => {
      switchProfessorSubView('dashboard');
    });

    // Voltar da Avaliação Individual para o Dashboard
    dom.btnDetailBack.addEventListener('click', () => {
      switchProfessorSubView('dashboard');
    });

    // Alternar para visualização de "Questão uma por vez"
    dom.btnModeSingle.addEventListener('click', () => {
      appState.profViewMode = 'single';
      renderStudentDetail(appState.selectedStudentId);
    });

    // Alternar para visualização de "Ver todas as questões"
    dom.btnModeAll.addEventListener('click', () => {
      appState.profViewMode = 'all';
      renderStudentDetail(appState.selectedStudentId);
    });

    // Paginação Anterior
    dom.btnQuestionPrev.addEventListener('click', () => {
      if (appState.selectedQuestionIndex > 0) {
        appState.selectedQuestionIndex--;
        const student = appState.students.find(s => s.id === appState.selectedStudentId);
        renderSingleQuestionView(student);
      }
    });

    // Paginação Próxima
    dom.btnQuestionNext.addEventListener('click', () => {
      const student = appState.students.find(s => s.id === appState.selectedStudentId);
      if (student && appState.selectedQuestionIndex < student.questions.length - 1) {
        appState.selectedQuestionIndex++;
        renderSingleQuestionView(student);
      }
    });

    // Ações na Questão Única: Deferir
    dom.btnSingleDeferir.addEventListener('click', () => {
      const student = appState.students.find(s => s.id === appState.selectedStudentId);
      if (!student) return;
      const q = student.questions[appState.selectedQuestionIndex];
      if (q && (q.status === 'deferido' || q.status === 'indeferido')) return;
      requestProfessorDecision(student.id, appState.selectedQuestionIndex, 'deferido', dom.singleProfFeedback.value);
    });

    // Ações na Questão Única: Indeferir
    dom.btnSingleIndeferir.addEventListener('click', () => {
      const student = appState.students.find(s => s.id === appState.selectedStudentId);
      if (!student) return;
      const q = student.questions[appState.selectedQuestionIndex];
      if (q && (q.status === 'deferido' || q.status === 'indeferido')) return;
      requestProfessorDecision(student.id, appState.selectedQuestionIndex, 'indeferido', dom.singleProfFeedback.value);
    });

    // Ações na Questão Única: Auto-rascunho ao digitar
    dom.singleProfFeedback.addEventListener('input', () => {
      const student = appState.students.find(s => s.id === appState.selectedStudentId);
      if (!student) return;
      const q = student.questions[appState.selectedQuestionIndex];
      if (!q || q.status === 'deferido' || q.status === 'indeferido') return;
      q.parecer = dom.singleProfFeedback.value;
      if (!q.status) q.status = 'em_analise';
      if (student.id === 'carlos-eduardo' && (q.number === 4 || q.id === 'q4')) {
        appState.professorFeedback = q.parecer;
        appState.professorStatus = 'em_analise';
      }
      saveState();
    });

    // Ações na Questão Única: Salvar Parecer (Rascunho)
    dom.btnSingleSaveFeedback.addEventListener('click', () => {
      const student = appState.students.find(s => s.id === appState.selectedStudentId);
      if (!student) return;
      const q = student.questions[appState.selectedQuestionIndex];
      if (q && (q.status === 'deferido' || q.status === 'indeferido')) return;
      const statusToKeep = q.status || 'em_analise';
      applyDecisionToQuestion(student.id, appState.selectedQuestionIndex, statusToKeep, dom.singleProfFeedback.value, false);
      renderSingleQuestionView(student);
      showToast('Rascunho de parecer salvo com sucesso! (Em Análise)');
    });

    // Modal de Confirmação Definitiva de Decisão do Professor
    if (dom.btnProfModalCancel) {
      dom.btnProfModalCancel.addEventListener('click', () => {
        closeProfDecisionModal();
      });
    }

    if (dom.btnProfModalConfirm) {
      dom.btnProfModalConfirm.addEventListener('click', () => {
        if (!pendingProfessorDecision) return;
        const { studentId, qIndex, decision, feedbackText } = pendingProfessorDecision;
        closeProfDecisionModal();

        applyDecisionToQuestion(studentId, qIndex, decision, feedbackText);
        renderStudentDetail(studentId);
        renderProfessorAnalytics();
      });
    }

    if (dom.profDecisionDialog) {
      dom.profDecisionDialog.addEventListener('cancel', (e) => {
        e.preventDefault();
        closeProfDecisionModal();
      });
    }

    // Importar Recursos (Simulação)
    const handleImport = () => {
      showToast('Simulação: Lote de 15 recursos importado com sucesso!');
      renderProfessorDashboard();
    };
    dom.btnProfImport.addEventListener('click', handleImport);
    dom.btnDetailImport.addEventListener('click', handleImport);

    // Exportar Recursos (Simulação)
    const handleExport = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.students, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "fgv_recursos_export.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Exportação de dados concluída!');
    };
    dom.btnProfExport.addEventListener('click', handleExport);
    dom.btnDetailExport.addEventListener('click', handleExport);
  }

  /* ===================================================================
     INICIALIZAÇÃO
     =================================================================== */
  function init() {
    setupEventListeners();

    // Inicia no fluxo salvo (padrão 'student')
    if (appState.activeFlow === 'professor') {
      switchFlow('professor');
    } else {
      switchFlow('student');
      renderStudentStep(appState.currentStep || 1);
    }
  }

  // Executa ao carregar o DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
