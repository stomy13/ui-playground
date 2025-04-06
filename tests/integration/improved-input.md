# ゴール 
- Playwright の Integration テストの作成
- Page Object Model パターンを使用した保守性の高いテスト設計

## 作成するテスト 
- 各画面に遷移し象徴となるエレメントが画面に表示されていることの確認

## テスト作成手順

### 1. 開発環境の準備
- `pnpm run dev` でローカル開発サーバーを起動
- サーバーが完全に起動してから次のステップに進む

### 2. ページ構造の分析
- Playwright の MCP を使ってローカルの開発環境にアクセス
- 各ページの構造を以下の点に注意して分析:
  - データ属性（data-testid など）の有無を確認
  - アクセシビリティに基づく要素（role, name など）を特定
  - 各ページの特徴的な要素を複数特定（冗長性のため）

### 3. Page Object Model の作成
- 各ページごとに専用のクラスを作成
- 以下の要素を含める:
  - ページ固有のセレクタ
  - ページ固有のアクション
  - ページ固有の検証メソッド
- 例：
  ```typescript
  export class HomePage {
    constructor(private page: Page) {}
    
    // セレクタ
    readonly playgroundButton = this.page.getByRole('button', { name: /Playground/ });
    
    // アクション
    async navigateToPlayground() {
      await this.playgroundButton.click();
    }
    
    // 検証
    async expectPageLoaded() {
      await expect(this.page).toHaveTitle('Home');
      await expect(this.playgroundButton).toBeVisible();
    }
  }
  ```

### 4. 効果的なロケータの選択優先順位
1. データ属性（テスト用）: `data-testid="home-button"`
2. アクセシビリティ属性: `getByRole('button', { name: 'Home' })`
3. セマンティックなセレクタ: `getByText('Home')`
4. CSSセレクタ（最終手段）: `page.locator('.home-button')`

### 5. テスト安定性のためのヒント
- `exact: true` は慎重に使用する - 部分一致で問題が発生した場合のみ使用
- フィルタリングと絞り込みを組み合わせる場合は、適切なスコープを設定
- 長いテキストマッチングは避け、一意に特定できる短いテキストを使用
- 複数の検証を行い、一つの検証が失敗しても全体のテストが機能するようにする

### 6. コード品質向上のためのフィードバック
- テスト実行時の失敗原因を明確に記録
- 適切なコメントを残して、選択したロケータの理由を説明
- 複雑なインタラクションは小さな関数に分解

### 7. アプリケーションコードの改善提案
- テスト容易性のために、主要なUIコンポーネントには `data-testid` 属性を追加
- フォーム要素には適切な `label` を関連付ける
- アクセシビリティの向上（これはテストの安定性も向上させる）
